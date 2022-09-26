/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tracks_playlist').del()
  await knex('tracks_playlist').insert([
    { track_id: 5, playlist_id: 1 },
    { track_id: 1, playlist_id: 2 },
    { track_id: 3, playlist_id: 3 },
    { track_id: 3, playlist_id: 4 },
    { track_id: 4, playlist_id: 1 },
    { track_id: 6, playlist_id: 2 },
    { track_id: 6, playlist_id: 3 },
    { track_id: 5, playlist_id: 4 },
    { track_id: 1, playlist_id: 3 },
    { track_id: 4, playlist_id: 2 },
  ])
}
