const express = require('express')
const db = require('../db/playlist')
const imageDb = require('../db/images')
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
  const id = Number(req.params.id)

  const playlist = {}
  db.getPlaylistDetailsById(id)
    .then((details) => {
      playlist.name = details.name
      playlist.image = details.image
      playlist.id = id
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
  //add call to db
  const { name } = req.body
  const { imageId } = req.body
  let tempPlayist = null
  const dbObj = { name: name, image_id: imageId }
  return db
    .addPlaylist(dbObj)
    .then((playlist) => {
      tempPlayist = playlist
      return imageDb.getImageById(imageId)
    })
    .then((imagesReturn) => {
      let image = imagesReturn.image_url
      res.json({ id: tempPlayist, name, image })
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
