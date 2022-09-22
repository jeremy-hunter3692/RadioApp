const express = require('express')
const db = require('../db/tracks')
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
