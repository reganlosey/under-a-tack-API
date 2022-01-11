
exports.up = function(knex) {
  return knex.schema.createTable('image', (table) => {
    table.increments('id');
    table.string('url').notNullable().unique();
    table.string('title').notNullable();
    table.array('color').notNullable();
    table.string('artist').notNullable();
    table.string('type').notNullable();
    table.boolean('favorited').notNullable();
    table.string('quantity').notNullable();
    table.string('price').notNullable();

  })
};

exports.down = function(knex) {
  
};
