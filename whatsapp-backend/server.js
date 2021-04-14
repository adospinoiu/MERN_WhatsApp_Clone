// Importing
import express from 'express';
import mongoose from 'mongoose';
import dbMessages from './dbMessages';

// App config
const app = express();
const port = process.env.PORT || 9000;

// Middleware

// DB Config
const connection_url = 'mongodb+srv://controller:rLtidIHwxZPp06ma@cluster0.i8ndy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// ????

// API Routes
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
});

app.post('/api/vi/messages/new', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage , (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))