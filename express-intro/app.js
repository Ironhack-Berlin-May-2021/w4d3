// set's up express
const express = require('express');
const app = express();

// this is needed to register the public folder
// containing all the assets so that it is accessible in the browser
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	// console.log('the home page')
	// this variable is provided by node 
	// console.log(__dirname);
	// res.send('this is the home page');
	res.sendFile(__dirname + '/views/home-page.html');
});


app.get('/dog', function (req, res) {
	// console.log('the home page')
	res.sendFile(__dirname + '/views/dog.html');
});

app.listen(3000, function () {
	console.log('Server listening');
});