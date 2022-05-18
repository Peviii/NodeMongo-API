const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.get('/posts', (req, res) => {
    Post.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});
router.post('/posts', (req, res) => {
    const post = Post(req.body);
    post.save().then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});
router.get('/posts/:id/post', (req, res) => {
    const { id } = req.params;
    Post.findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});
router.put('/posts/:id/update', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    Post.updateOne({ _id: id }, { $set: {title, description }})
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));  
});
router.delete('/posts/:id/delete', (req, res) => {
    const { id } = req.params;
    Post.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});
module.exports = router;