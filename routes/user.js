const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/users', (req, res) => {
	User.find()
		.then((data) => res.json(data))
		.catch((err) => res.json({ message: err }));
}); 
router.post('/users', (req, res) => {
	const user = User(req.body);
	user.save().then((data) => res.json(data))
	.catch((err) => res.json({ message: err }));
});
router.get('/users/:id/user', (req, res) => {
	const { id } = req.params;
	User.findById(id)
		.then((data) => res.json(data))
		.catch((err) => res.json({ message: err }));
});
router.put('/users/:id/update', (req, res) => {
	const { id } = req.params;
	const { name, age, email } = req.body;
	User.updateOne({ _id: id }, { $set: {name, age, email} })
		.then((data) => res.json(data))
		.catch((err) => res.json({ message: err }));
});
router.delete('/users/:id/delete', (req, res) => {
	const { id } = req.params;
	User.deleteOne({_id: id})
		.then((data) => res.json(data))
		.catch((err) => res.json({ message: err }));
});
module.exports = router;