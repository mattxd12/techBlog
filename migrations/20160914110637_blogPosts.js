
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogPosts', function(table){
    table.increments();
    table.string('name');
    table.timestamp('created_at');
    table.string('title');
    table.string('content');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogPosts');
};
