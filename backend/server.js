const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://localhost:27017/backenddb', { useNewUrlParser: true,  useUnifiedTopology: true})

//const Annotation = mongoose.model("Annotation");

app.get('/', (req, res) => {
    res.send('Teste!')
});

app.listen(3001);