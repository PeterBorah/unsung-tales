var restify = require('restify');
var db = require('./database');
var Bookshelf = require('bookshelf');

var server = restify.createServer();
server.use(restify.CORS());
server.use(restify.fullResponse());

db.initialize();

PG = Bookshelf.initialize({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5433',
    user: 'node',
    password: 'pass',
    database: 'color_app',
    charset: 'utf8'
  }
});

var Color = PG.Model.extend({
  tableName: 'colors'
});

var Colors = PG.Collection.extend({
  model: Color
});


server.get('/colors', function(req, res, next) {
  new Colors().fetch().then(function(results) {
    res.send({ "colors": results.toJSON() });
  });
});

server.listen(4567, function() {
  console.log('%s listening at %s', server.name, server.url);
});
