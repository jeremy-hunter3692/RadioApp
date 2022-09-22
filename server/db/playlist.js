const connection = require('./connection')

function getPlaylistById(id, db = connection) {
  return db('tracks_playlist')
    .where('playlist_id', id)
    .join('tracks', 'track_id', 'tracks.id ')
    .join('playlist', 'playlist_id', 'playlist.id')
    .select('filepath', 'title', 'artist', 'album', 'notes', 'name')
}
function getAllPlaylists(db = connection) {
  return db('playlist').select('name')
}

function addPlaylist(newPlaylist, db = connection) {
  return db('playlist')
    .insert(newPlaylist)
    .then(() => getAllPlaylists(db))
}

function addTracksToPlaylist(id, data, db = connection) {
  return db('tracks_playlist').insert(id, data)
}

module.exports = {
  getPlaylistById,
  getAllPlaylists,
  addPlaylist,
  addTracksToPlaylist,
}
