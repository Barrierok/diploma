
exports.up = (knex) => (
  knex.schema
    .table('channels', (table) => {
      table
        .integer('owner_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .index();
    })
    .table('messages', (table) => {
      table
        .integer('owner_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .index();
    })
);

exports.down = (knex) => (
  knex.schema
    .table('channels', (table) => {
      table.dropColumn('owner_id');
    })
    .table('messages', (table) => {
      table.dropColumn('owner_id');
    })
);