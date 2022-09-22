const express = require('express')
const path = require('path')

const playlistRoutes = require('./routes/playlist')
const imagesRoutes = require('./routes/images')
const tracksRoutes = require('./routes/tracks')
// const createRoutes = require('./routes/create')
// const usersRoutes = require('./routes/users')
// const taggedRoutes = require('./routes/tagged')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/playlist', playlistRoutes)
server.use('/api/v1/images', imagesRoutes)
server.use('/api/v1/tracks', tracksRoutes)
// server.use('/api/v1/create', createRoutes)
// server.use('/api/v1/users', usersRoutes)
// server.use('/api/v1/tagged', taggedRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
