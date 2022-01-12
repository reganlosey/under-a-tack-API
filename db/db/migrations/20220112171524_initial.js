exports.up = function(knex) {
  return knex.schema
    .createTable('images', function (table) {
      table.increments('id').primary();
      table.string('url').notNullable().unique();
      table.string('title').notNullable();
      table.specificType('color', 'text[]').notNullable();
      table.string('artist').notNullable();
      table.string('type').notNullable();
      table.boolean('favorited').notNullable();
      table.string('quantity').notNullable();
      table.string('price').notNullable();
      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('images');
};
