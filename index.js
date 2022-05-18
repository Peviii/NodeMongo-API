const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const user = require('./routes/user.js');
const post = require('./routes/post.js');
const PORT = process.env.PORT || 9000;
app.use(express.json());

//ROUTES
app.get('/', (req, res) => { res.send("API welcome page");});
app.use('/api', user);
app.use('/api', post);
//MONGOOSE
mongoose.connect(process.env.DB_LINK)
	.then(() => console.log("MONGO ON!"))
	.catch((err) => console.log(` ${err} !!`));
app.listen(PORT,() => console.log(`${PORT} ONLINE!`));