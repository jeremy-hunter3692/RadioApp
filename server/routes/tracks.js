const express = require('express')
const db = require('../db/tracks')
const router = express.Router()

// GET /api/v1/tracks/
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

router.post('/', (req, res) => {
<<<<<<< HEAD
  const tracks = req.body.tracks
  console.log(tracks)
  db.addTrackToPlaylist(tracks)
=======
  const newTrack = req.body
  // console.log('route: info =', info)
  db.addTrack(newTrack)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
>>>>>>> dev
})

module.exports = router
