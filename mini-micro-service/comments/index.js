const express = require('express');
const { randomBytes } = require('crypto')
const morgan = require('morgan');
const cors = require('cors');
const { default: axios } = require('axios');
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
    },
  });

  res.status(201).send(comments);
});

app.post("/events", (req, res) => {
  console.log("Event Received", req.body.type);

  res.send({});
});

const COMMENTPORT = process.env.COMMENTPORT || 4001

app.listen(COMMENTPORT, () => console.log(`Comment Service Listening on ${COMMENTPORT}`))





