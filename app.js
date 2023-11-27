const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//DB Connection String to connect to mongodb
const dbURI =
	'mongodb+srv://nodetutes:test1234@nodetuts.qcps1qr.mongodb.net/node-tutes?retryWrites=true&w=majority';

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => app.listen(3000))
	.catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//Middleware & static files example

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//home route
app.get('/', (req, res) => {
	res.redirect('/blogs');
});

//about route
app.get('/about', (req, res) => {
	/* res.send('<p>Express Home Page</p>'); */

	res.render('about', { title: 'About' });
});

//blog routes
app.use('/blogs', blogRoutes);

//404 page
app.use((req, res) => {
	res.status(404).render('404', { title: '404' });
});
