// Importing
import express from 'express';

// App config
const app = express();
const port = process.env.PORT || 9000;

// Middleware

// DB Config

// ????

// API Routes
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))