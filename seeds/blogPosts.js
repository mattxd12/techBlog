
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogposts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blogposts').insert({id: 1, name: 'Matt', title: 'Tech Blog 1', content: 'Blog article here' }),
        knex('blogposts').insert({id: 2, name: 'Tyler', title: 'Tech Blog 2', content: 'Blog article here' }),
        knex('blogposts').insert({id: 3, name: 'Navid', title: 'Tech Blog 3', content: 'Blog article here' }),
      ]);
    });
};
