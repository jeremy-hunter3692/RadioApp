exports.up = function (knex) {
  return knex.schema.createTable('playlist', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image_id').references('images.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('playlist')
}
