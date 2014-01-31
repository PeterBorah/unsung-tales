var restify = require('restify');

var server = restify.createServer();

server.use(restify.CORS());
server.use(restify.fullResponse());

server.get('/colors', function(req, res, next) {
  res.send({ "colors": [{"id": 1, "name": "pink"}]});
});

server.listen(4567, function() {
  console.log('%s listening at %s', server.name, server.url);
});
