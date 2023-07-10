const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("hello express");
});

app.get('/about', (req, res) => {
    res.send("this is page about!");
});

app.use((req,res) => {
    res.status(404).send("Page not found")
});

app.listen(port, () => {
    console.log(`Server runing at port ${port}`);
});