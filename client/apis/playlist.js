// API FOR PLAYLIST
// DEALS WITH SERVER SIDE ROUTER CALLS TO DB
import request from 'superagent'
const rootUrl = '/api/v1'

export function getPlaylists() {
  return request.get(rootUrl + '/playlist').then((res) => {
    console.log('api', res.body)
    return res.body
  })
}

export function addPlaylist(newPlaylist) {
  return request
    .post(rootUrl + '/playlist/')
    .send({ newPlaylist })
    .then((res) => {
      console.log('addPlaylist api - res.body:', res.body)
      return res.body
    })
    .catch(errorHandler('ADD', rootUrl + `/playlists/`))
}

//----------------
//-- CLOUDINARY --
//----------------
export async function getAudioFile(audioFile) {
  // TODO: when auth0 is set up, need to pass token

  const { name, type } = audioFile
  const fileObject = {
    fileName: name,
    fileType: type,
  }

  const { signature, timestamp, cloudName, apiKey } = await request
    .post(rootUrl + '/playlist/audiofile')
    .send(fileObject)
    //.set('Authorization', `Bearer ${token}`) //TODO: May need this with auth0
    .then((res) => res.body)

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`

  const formData = new FormData()
  formData.append('file', audioFile)
  formData.append('api_key', apiKey)
  formData.append('timestamp', timestamp)
  formData.append('signature', signature)

  const imageUrl = await request
    .post(url)
    .send(formData)
    .then((res) => res.body.url)

  return imageUrl
}
//--------------

// perhaps if (re.status === 200) {return res.body} for line 49

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
