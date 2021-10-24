const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { default: axios } = require('axios');
const { application } = require('express');
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', async (req,res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id: id,
        title: title
    }
    try {
        await axios.post("http://localhost:4005/events", {
          type: "PostCreated",
          data: {
            id,
            title,
          },
        });
    } catch (error) {
        console.log(error)
    }

    res.status(201).send(posts[id]);
})

app.post('/events', (req, res) => {
    console.log('Event Received', req.body.type);
    res.send({})
})

app.listen(4000, () => console.log(`POST Services - Listening on port 4k`))