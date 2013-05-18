var port = process.env.PORT || 3000,
	http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end(req.url.substr(1, req.url.length - 5))
}).listen(process.env.PORT || 3000);