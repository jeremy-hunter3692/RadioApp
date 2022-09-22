exports.up = function (knex) {
  return knex.schema.createTable('images', (table) => {
    table.increments('id').primary()
    table.string('image_url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('images')
}
