const express = require('express')
const app = express();

const cors = require('cors')

app.use(cors({
    origin: '*'
}));

// mongodb connectivity
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/REACT_BACKEND");

// creating middleware for the routes
const post_route = require('./routes/postRoute')
app.use('/api', post_route)

app.listen(8000, () => {
    console.log("server is Running...");
})