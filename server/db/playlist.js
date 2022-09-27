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

// Add multiple tracks to a playlist - pass in an array of tracks to add
function addTracksToPlaylist(tracksArray, db = connection) {
  console.log('DB / PLAYLIST', tracksArray)
  return db('tracks_playlist').insert(tracksArray)
}

// Add one track to a playlist - 'data' is an obj containing track and playlist properties (which are the id values)
function addOneTrackToPlaylist(data, db = connection) {
  const trackId = data.track
  const playlistId = data.playlist
  return db('tracks_playlist').insert({
    track_id: trackId,
    playlist_id: playlistId,
  })
}
module.exports = {
  addTracksToPlaylist,
  addOneTrackToPlaylist,
  getTracksByPlaylistId,
  getAllPlaylists,
  addPlaylist,
  getPlaylistDetailsById,
}
