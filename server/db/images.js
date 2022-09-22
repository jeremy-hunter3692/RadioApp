const connection = require('./connection')

function getImageById(id, db = connection) {
  return db('images').where('id', id).select().first()
}

function getAllImages(db = connection) {
  return db('images').select()
}

module.exports = {
  getImageById,
  getAllImages,
}
