const express = require('express')

const router = express.Router()

// GET /api/v1/playlist/
router.get('/', (req, res) => {
  res.send('playlist route hit!')
})

module.exports = router
