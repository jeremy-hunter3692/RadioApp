const express = require('express')
const db = require('../db/playlist')
const router = express.Router()

// GET /api/v1/playlist/
router.get('/', (req, res) => {
  db.getAllPlaylists()
    .then((data) => {
      res.json(data)
      // res.json({ ...captionData, id: ids[0], image_id: tempImageId })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// router.get('/', (req, res) => {
//   db.getPlaylistById(3)
//     .then((data) => {
//       res.json(data)
//       // res.json({ ...captionData, id: ids[0], image_id: tempImageId })
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })

module.exports = router
