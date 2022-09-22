const connection = require('./connection')

function getPlaylist(db = connection) {
  return db('playlist').select()
}

module.exports = {
  getPlaylist,
}
