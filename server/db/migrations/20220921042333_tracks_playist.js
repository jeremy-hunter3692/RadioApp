/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('tracks_playlist', (table) => {
    table.int('track_id').references('tracks.id')
    table.int('playlist_id').references('playlist.id')

    //cascades knex function and sql library
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('tracks_playlist')
}
