var Bookshelf = require('bookshelf');
var Knex = require('knex');

var knex = Knex.initialize({
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


function build_db() {
  knex.schema.createTable('colors', function (table) {
    table.string('name');
    table.increments('id').primary();
  }).then(function () {
    knex('colors').insert({name: 'pinkish, I guess'}).then( function () {
      console.log('Colors Table is Created!');
      return true
    });
  });
}

exports.initialize = function () {
  knex.schema.hasTable('colors').then(function(exists) {
    if (!exists) {
      return build_db()
    }
    else {
      return true
    }
  });
}

