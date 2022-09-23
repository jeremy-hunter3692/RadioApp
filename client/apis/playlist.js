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
export function addPlaylist(newPlaylist) {
  console.log('API newplaylist', newPlaylist.name)
  return (
    request
      .post(rootUrl + '/playlist/')
      .send(newPlaylist)
      // .send({ playlistName: newPlaylist.name, tracks: [] })
      .then((res) => {
        console.log('addPlaylist API - res.body:', res.body)
        return res.body
      })
      .catch(errorHandler('ADD', rootUrl + `/playlists/`))
  )
}

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
