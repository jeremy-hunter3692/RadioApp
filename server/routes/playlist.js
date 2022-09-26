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
// GET /api/v1/playlist/:id
router.get('/:id', (req, res) => {
  const id = req.params.id
  const playlist = {}
  db.getPlaylistDetailsById(id)
    .then((details) => {
      playlist.name = details.name
      playlist.image = details.image
      playlist.id = details.id
      return db.getTracksByPlaylistId(id)
    })
    .then((tracks) => {
      playlist.tracks = tracks
      res.json(playlist)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// Nani did this for adding a playlist to the db - cheers
// POST /api/v1/playlist/
router.post('/', (req, res) => {
  const { name } = req.body
  db.addPlaylist({ name })
    .then((playlist) => {
      res.json({ id: playlist, name })
      return null
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send(err.message)
    })
})

// POST /api/v1/playlist/addTrack
router.post('/addTrack', (req, res) => {
  const data = req.body
  db.addTracksToPlaylist(data)
    .then((track) => {
      res.json(track)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send(err.message)
    })
})

// TO DO adding new playist and tracks at the same time.
router.post('/', (req, res) => {
  const data = { name: req.body.playlistName }
  // console.log('data info', data)
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
