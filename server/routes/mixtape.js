const express = require('express')

const router = express.Router()

// GET /api/v1/mixtape/
router.get('/', (req, res) => {
  res.send('mixtape route hit!')
})

module.exports = router
