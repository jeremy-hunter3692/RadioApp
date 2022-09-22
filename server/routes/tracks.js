const express = require('express')
const db = require('../db/tracks')
const router = express.Router()

// GET /api/v1/Tracks/
router.get('/', (req, res) => {
  db.getAllTracks()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/id', (req, res) => {
  const id = req.body.id
  db.getTrackById(id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
