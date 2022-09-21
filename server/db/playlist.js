const connection = require('./connection')

function getPlaylistById(id, db = connection) {
  return db('tracks_playlist')
    .where('playlist_id', id)
    .join('tracks', 'track_id', 'tracks.id ')
    .join('playlist', 'playlist_id', 'playlist.id')
    .select('filepath', 'title', 'artist', 'album', 'notes', 'name')
}
function getAllPlaylists(db = connection) {
  return db('tracks_playlist')
    .join('tracks', 'track_id', 'tracks.id ')
    .join('playlist', 'playlist_id', 'playlist.id')
    .select('filepath', 'title', 'artist', 'album', 'notes', 'name')
}

module.exports = {
  getPlaylistById,
  getAllPlaylists,
}
