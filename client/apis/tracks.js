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

// GET /api/v1/tracks
export function getAllTracks() {
  return request.get(rootUrl + '/tracks').then((res) => {
    return res.body
  })
}

//----------------
//-- CLOUDINARY --
//----------------
export async function getAudioFileUrl(audioFile) {
  // TODO: when auth0 is set up, need to pass token
  const { name, type } = audioFile
  const fileObject = {
    fileName: name,
    fileType: type,
  }

  const { signature, timestamp, cloudName, apiKey } = await request

    .post(rootUrl + '/tracks/audiofile')
    .send(fileObject)
    //.set('Authorization', `Bearer ${token}`) //TODO: May need this with auth0
    .then((res) => res.body)

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`

  const formData = new FormData()
  formData.append('file', audioFile)
  formData.append('api_key', apiKey)
  formData.append('timestamp', timestamp)
  formData.append('signature', signature)

  const imageUrl = await request
    .post(url)
    .send(formData)
    .then((res) => res.body.url)
  //console.log('APIS / TRACKS / This is the url of the file', imageUrl)
  return imageUrl
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
