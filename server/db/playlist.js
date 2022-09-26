const connection = require('./connection')

function getTracksByPlaylistId(id, db = connection) {
  return db('tracks_playlist')
    .where('playlist_id', id)
    .join('tracks', 'track_id', 'tracks.id ')
    .select(
      'filepath',
      'tracks.id as trackId',
      'title',
      'artist',
      'album',
      'notes'
    )
}

function getPlaylistDetailsById(id, db = connection) {
  return db('playlist')
    .where('playlist.id', id)
    .join('images', 'image_id', 'images.id')
    .select('name', 'images.image_url as image')
    .first()
}

function getAllPlaylists(db = connection) {
  return db('playlist')
    .join('images', 'playlist.image_id', 'images.id')
    .select('name', 'images.image_url as image', 'playlist.id')
}

function addPlaylist(newPlaylist, db = connection) {
  return db('playlist')
    .insert(newPlaylist)
    .then((ids) => ids[0])
}

function addTracksToPlaylist(tracksArray, db = connection) {
  return db('tracks_playlist').insert(tracksArray)
}

module.exports = {
  addTracksToPlaylist,
  getTracksByPlaylistId,
  getAllPlaylists,
  addPlaylist,
  getPlaylistDetailsById,
}
