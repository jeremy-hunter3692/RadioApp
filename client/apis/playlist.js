// API FOR PLAYLIST
// DEALS WITH SERVER SIDE ROUTER CALLS TO DB
import request from 'superagent'
const rootUrl = '/api/v1'

// GET /api/v1/playlist
export function getPlaylists() {
  return request.get(rootUrl + '/playlist').then((res) => {
    return res.body
  })
}

// add Playlist name from a form
//TODO: Randomise id number. Then let users select image
export function addPlaylist(newPlaylist) {
  const randomNumber = Math.ceil(Math.random() * 16)
  const tempObj = { ...newPlaylist, imageId: randomNumber }
  return request
    .post(rootUrl + '/playlist/')
    .send(tempObj)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('ADD', rootUrl + `/playlists/`))
}
// get a Playlist by id
export function getPlaylistById(id) {
  return request
    .get(rootUrl + `/playlist/${id}`)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('ADD', rootUrl + `/playlists/${id}`))
}

// POST /api/v1/playlist/assignTrack
// Assign a track to a playlist
export function assignTracktoPlaylist(data) {
  return request
    .post(rootUrl + '/playlist/assignTrack')
    .send(data)
    .then((res) => {
      return res.body
    })
}

//--------------

// perhaps if (res.status === 200) {return res.body} ??  not sure that would matter if we do auth0

function errorHandler(method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(
        `Error: You need to implement an API route for ${method} ${route}`
      )
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
