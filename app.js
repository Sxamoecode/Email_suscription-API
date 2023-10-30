const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const logger = require('morgan');

const router = require('./mail/sendMail.router');


const port = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
});


function startServer(){

    server.listen(port, () =>{
        console.log(`Starting server on port ${port}`)
    });
}
startServer();