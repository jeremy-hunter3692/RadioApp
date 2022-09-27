const express = require('express')
const db = require('../db/tracks')
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
