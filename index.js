const express = require('express');
const router = require('./backend/routers');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('frontend'));
app.use('/items', router);

const mongoose = require('mongoose');
const URL = "mongodb+srv://Kuzuryu:1234@cluster0.niucotq.mongodb.net/";
mongoose.connect(URL);

const PORT = 9999;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});