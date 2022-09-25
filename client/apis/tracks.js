import request from 'superagent'
const rootUrl = '/api/v1'

// POST /api/v1/tracks
// add track to db from a form
export function addTrackToDb(newTrack) {
  return request
    .post(rootUrl + '/tracks')
    .send(newTrack)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('ADD', rootUrl + `/tracks`))
}

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
