import request from 'superagent'

const rootUrl = '/api/v1'

// remove this once we are connecting to the database
const data = [
  {
    id: 1,
    name: 'The Fillmore',
    creator: 'DJ Craig',
    imageFilepath: './images/mixtape1.png',
    // note - just make a random generator of images and put it with the playlist component.
  },
  {
    id: 2,
    name: 'K-Pop',
    creator: 'Nani',
    imageFilepath: './images/mixtape16.png',
  },
  {
    id: 3,
    name: 'The Boom Boom Room',
    creator: 'DJ Jeremy',
    imageFilepath: './images/mixtape3.png',
  },
  {
    id: 4,
    name: 'Rolling Stone',
    creator: 'DJ Peter',
    imageFilepath: './images/mixtape8.png',
  },
]

export function getMixtapes() {
  return request.get(rootUrl + '/mixtapes').then((res) => {
    console.log('api: mixtape data', data)
    return data // once the db is connected, replace this line with the line below

    //return res.body.mixtape
  })
}

export function addMixtape(newMixtape) {
  return request
    .post(rootUrl + '/mixtapes/')
    .send({ newMixtape })
    .then((res) => {
      console.log('addMixtape api - res.body:', res.body)
      return res.body
    })
    .catch(errorHandler('ADD', rootUrl + `/mixtapes/`))
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
