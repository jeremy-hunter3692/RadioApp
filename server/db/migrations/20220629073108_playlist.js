exports.up = function (knex) {
  return knex.schema.createTable('playlist', (table) => {
    table.increments('id').primary()
    table.integer('song_id').references('')
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('playlist')
}
