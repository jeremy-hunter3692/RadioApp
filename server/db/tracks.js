const connection = require('./connection')

function getAllTracks(db = connection) {
  return db('tracks').select()
}

function getTrackById(id, db = connection) {
  return db('tracks').where('id', id).select().first()
}

module.exports = {
  getAllTracks,
  getTrackById,
}
