const express = require('express')
const db = require('../db/playlist')
const router = express.Router()
// We used 'import' in the Patch group project, but doesn't work here ...
// import 'dotenv/config'

// ...So I think we need to use the 'require' syntax (per code from class):
require('dotenv').config()

// We used 'import' in the Patch group project, but doesn't work here ...
// import { v2 as cloudinary } from 'cloudinary'

// ...So I think we need to use the 'require' syntax (per code from class):
const cloudinary = require('cloudinary').v2

const cloudName = 'dwjfqnyxs'
const apiKey = '581619511564695'
const apiSecret = process.env.SECRET_KEY

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
      playlist.name = details.name
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

//----------------
//-- CLOUDINARY --
//----------------
router.post('/audiofile', (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000)

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
    },
    apiSecret
  )

  res.json({
    signature,
    timestamp,
    cloudName,
    apiKey,
  })
})

module.exports = router
