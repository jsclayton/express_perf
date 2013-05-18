var express = require('express'),
	app = express();

app.get('/foo', function (req, res) {
	return res.send('bar');
})

// Note: dumb idea for anything other than testing
app.get('/loaderio-:token.txt', function (req, res) {
	return res.send('loaderio-' + req.params.token);
})

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
