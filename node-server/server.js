// First Node Server
// we use the node internal http module
const http = require('http');

const port = 3000;
const server = http.createServer(function (request, response) {
	// console.log('this is the request handler');
	// console.log(request.url);
	if (request.url === '/') {
		response.end('<h1>This is the Home Page</h1>');
	}
	else if (request.url === '/about') {
		response.end('<h1>This is the About Page</h1>');
	}
	else {
		response.end('<h1>404 - Not Found</h1>');
	}
	// response.end();
});

// start the server
server.listen(port, function () {
	console.log(`Server listening on port ${port}`);
});