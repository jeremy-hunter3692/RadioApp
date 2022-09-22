const express = require('express')
const db = require('../db/playlist')
const router = express.Router()

// GET /api/v1/playlist/
router.get('/', (req, res) => {
  db.getAllPlaylists()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//TODO Figure out how id is coming in.
router.get('/id', (req, res) => {
  const id = req.body.id
  db.getPlaylistById(id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// TO DO adding new playist and tracks at the same time.
router.post('/', (req, res) => {
  const data = 'DJSleePete' //req.body.playlistName
  const tracks = [
    { track_id: 2 },
    { track_id: 3 },
    { track_id: 2 },
    { track_id: 8 },
    { track_id: 9 },
  ]

  //let tempId = null
  db.addPlaylist(data)
    .then((id) => {
      //tempId = id
      tracks.map((x) => {
        //x.tempId
        x.id
      })
      return db.addTracksToPlaylist(tracks)
    })
    .then((data) => {
      res.json(data)
      // res.json({ ...captionData, id: ids[0], image_id: tempImageId })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
