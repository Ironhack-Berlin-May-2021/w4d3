const express = require('express');
const app = express();

app.set('view engine', 'hbs');

// importing the movies from the json file
const movies = require('./movies.json');
// console.log(movies);

app.get('/', (req, res) => {
	const todoList = ['learn node', 'learn react', 'watch dark', 'watch devs'];
	const people = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Peter' }];
	const name = 'Ahmed';

	// parameters: <name of the file>, <data as an object>
	res.render('index', { user: name, list: todoList, persons: people, tag: '<h3>This is html</h3>' });
});

app.get('/movies', (req, res) => {
	res.render('movies', { moviesList: movies });
})

app.listen(3000, () => {
	console.log('Server listening');
})