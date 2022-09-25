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

router.get('/:id', (req, res) => {
  const id = req.params.id
  const playlist = {}
  db.getPlaylistDetailsById(id)
    .then((details) => {
      console.log('deets', details)
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
// POST /api/v1/
router.post('/', (req, res) => {
  console.log('SERVER ROUTE', req.body)
  const { name } = req.body
  const { imageId } = req.body
  const image = imageId
  const playlistData = {}
  playlistData.image_id = imageId
  playlistData.name = name
  db.addPlaylist(playlistData)
    .then((playlist) => {
      res.json({ id: playlist, name, image })
      return null
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send(err.message)
    })
})

// TO DO adding new playist and tracks at the same time.
router.post('/', (req, res) => {
  const data = { name: req.body.playlistName }
  console.log('server route', data)
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
