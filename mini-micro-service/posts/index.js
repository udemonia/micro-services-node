const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(morgan('tiny'))

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req,res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id: id,
        title: title
    }
    res.status(201).send(posts[id]);
})

app.listen(4000, () => console.log(`POST Services - Listening on port 4k`))