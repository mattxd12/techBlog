
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogposts', function(table){
    table.increments();
    table.string('name');
    table.timestamps(true,true);
    table.string('title');
    table.string('content');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogposts');
};
