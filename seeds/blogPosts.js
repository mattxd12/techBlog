
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogposts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
      ]);
    });
};
