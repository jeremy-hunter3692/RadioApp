const express = require('express')
const db = require('../db/images')
const router = express.Router()

// GET /api/v1/images/
router.get('/', (req, res) => {
  db.getAllImages()
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
  db.getImageById(id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
