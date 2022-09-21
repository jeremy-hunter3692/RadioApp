exports.up = function (knex) {
  return knex.schema.createTable('tracks', (table) => {
    table.increments('id').primary()
    table.string('filepath')
    table.string('title')
    table.string('artist')
    table.string('album')
    table.string('notes')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tracks')
}
