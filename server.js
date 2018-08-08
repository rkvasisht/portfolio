
require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(bp.urlencoded({extended: true}));
app.use(ejsLayouts);

app.get('/', (req, res) => {
	
	res.render('index');
});


app.get('/projects', (req, res) => {
	
	res.render('projects');
});

app.get('/contact', (req, res) => {
	
	res.render('contact');
});

app.get('/about', (req, res) => {
	
	res.render('about');
});

app.get('/resume', (req, res) => {
	
	res.render('resume');
});

app.listen(port, function() {console.log('Hooked on ' + port)});

