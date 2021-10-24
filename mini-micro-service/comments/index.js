const express = require('express');
const { randomBytes } = require('crypto')
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  console.log(req.body)
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;
    console.log(commentsByPostId)
  res.status(201).send(comments);

});

const COMMENTPORT = process.env.COMMENTPORT || 3003

app.listen(COMMENTPORT, () => console.log(`Comment Service Listening on ${COMMENTPORT}`))





