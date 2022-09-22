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
  const data = { name: req.body.playlistName }
  const tracks = req.body.tracks
  let tempId = null
  db.addPlaylist(data)
    .then((id) => {
      tempId = id
      let result = tracks.map((x) => {
        return { ...x, playlist_Id: tempId }
      })
      return db.addTracksToPlaylist(result)
    })
    .then((result) => {
      res.json(result)
      //TO DO look up best practise for sending back json data here
      //was in Sarahs lecture
      //res.json({ ...captionData, id: ids[0], image_id: tempImageId })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
