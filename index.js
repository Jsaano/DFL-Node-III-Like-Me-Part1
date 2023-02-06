const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const path = require('path');

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

const {getPosts, createPost} = require('./consultas');

app.get('/posts', getPosts);
app.post('/posts', createPost);

app.listen(3000, () => {
    console.log('Server is running on localhost:3000');
});