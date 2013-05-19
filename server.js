var port = process.env.PORT || 3000,
	http = require('http');

http.createServer(function (req, res) {
	var body = "bar";
	if (req.url.indexOf("loaderio") != -1) {
		body = req.url.substr(1, req.url.length - 5);
	} else if (req.url === "/env") {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(process.env));
	}
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end(body)
}).listen(process.env.PORT || 3000);