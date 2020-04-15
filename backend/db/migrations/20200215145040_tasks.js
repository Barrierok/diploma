exports.up = (knex) =>
  knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();
    table.string('title').unique();
    table.string('description');
    table.string('status');
    table.datetime('created_at');
    table.datetime('updated_at');
  });

exports.down = (knex) => knex.schema.dropTableIfExists('tasks');
