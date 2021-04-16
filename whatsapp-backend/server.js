// Importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';

// App config
const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());

// DB Config
const connection_url = 'mongodb+srv://controller:rLtidIHwxZPp06ma@cluster0.i8ndy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const pusher = new Pusher({
    appId: "1188685",
    key: "d7b5fb7d55c650625560",
    secret: "37d1cd9d91f0cee4cffe",
    cluster: "us3",
    useTLS: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("DB Connected");

    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log('A change occured:', change);

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.user,
                message: messageDetails.message,
            });
        } else {
            console.log('Error triggering Pusher');
        }
    })
})
// ????

// API Routes
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
});

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))