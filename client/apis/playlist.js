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
  return request
    .post(rootUrl + '/playlists/')
    .send(newPlaylist)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('ADD', rootUrl + `/playlists/`))
}

// get a Playlist by id
export function getPlaylistById(id) {
  return (
    request
      // .get(rootUrl + `/playlists/${id}`)
      // server route is GET /:id
      .get(rootUrl + `/${id}`)
      .then((res) => {
        console.log('API: ', res.body)
        return res.body
      })
      .catch(errorHandler('ADD', rootUrl + `/playlists/${id}`))
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
