
exports.up = function(knex) {
  return knex.schema 
    .alterTable('images', function (table) {
      table.integer('quantity').notNullable().alter()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('images')
};
