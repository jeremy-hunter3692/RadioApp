const db = require('../../db/playlist')
const request = require('supertest')
const server = require('../../server')

jest.mock('../../db/playlist')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

describe('GET /api/v1/playlist', () => {
  test('returns all playlists from database', () => {
    const playlistData = [
      { id: 5, name: 'Summer Lovin' },
      { id: 6, name: 'Winter Chills' },
      { id: 7, name: 'Autum Blues' },
    ]
    expect.assertions(3)
    db.getAllPlaylists.mockReturnValue(Promise.resolve(playlistData))
    return request(server)
      .get('/api/v1/playlist')
      .then((res) => {
        expect(res.body).toHaveLength(3)
        expect(res.body[0].id).toBe(5)
        expect(res.body[2].name).toBe('Autum Blues')
        return null
      })
  })
  test('return status 500 and consoles error when problem', () => {
    db.getAllPlaylists.mockImplementation(() =>
      Promise.reject(new Error('test error message'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/playlist')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('test error message')
        return null
      })
  })
})

//-----------------

describe('GET /api/v1/playlist/id', () => {
  test('returns playlist for selected id from database', () => {
    const playlistData = {
      id: 3,
      name: 'Summer Lovin',
      image: 'images/1.png',
    }
    expect.assertions(3)
    db.getPlaylistDetailsById.mockReturnValue(Promise.resolve(playlistData))
    return request(server)
      .get('/api/v1/playlist/id')
      .then((res) => {
        expect(res.body.id).toBe(3)
        expect(res.body.name).toBe('Summer Lovin')
        expect(res.body.image).toBe('images/1.png')
        return null
      })
  })
  test('return status 500 and consoles error when problem', () => {
    db.getPlaylistDetailsById.mockImplementation(() =>
      Promise.reject(new Error('test error message'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/playlist/5')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('test error message')
        return null
      })
  })
})

//-----------------

describe('POST /api/v1/playlist', () => {
  // test.skip('adds a playlist to the databse', () => {
  //   const playlistData = {
  //     id: 7,
  //     name: 'public/track1',
  //   }
  //   expect.assertions(1)
  //   db.addTracksToPlaylist.mockReturnValue(Promise.resolve(playlistData))
  //   return request(server)
  //     .post('/api/v1/playlist')
  //     .send(playlistData)
  //     .then((res) => {
  //       expect(res.body.id).toBe(7)
  //       return null
  //     })
  })
  test('return status 500 and consoles error when problem', () => {
    db.addTracksToPlaylist.mockImplementation(() =>
      Promise.reject(new Error('test error message'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/playlist/addTrack')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('test error message')
        return null
      })
  })
})

//-----------------

describe('POST /api/v1/playlist/addTrack', () => {
  test('adds a track to a playlist', () => {
    const trackData = {
      id: 5,
      filePath: 'public/track1',
      title: 'candy floss sunset',
    }
    expect.assertions(3)
    db.addTracksToPlaylist.mockReturnValue(Promise.resolve(trackData))
    return request(server)
      .post('/api/v1/playlist/addTrack')
      .send(trackData)
      .then((res) => {
        expect(res.body.id).toBe(5)
        expect(res.body.filePath).toBe('public/track1')
        expect(res.body.title).toBe('candy floss sunset')
        return null
      })
  })
  test('return status 500 and consoles error when problem', () => {
    db.addTracksToPlaylist.mockImplementation(() =>
      Promise.reject(new Error('test error message'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/playlist/addTrack')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('test error message')
        return null
      })
  })
})

//-----------------

describe('GET /api/v1/playlist/', () => {
  // next to fix this once route.post is fixed

  // test('adding tracks to a playlsit', () => {
  //   const playlistData = {
  //     id: 5,
  //     name: 'Summer Lovin',
  //     image: './public/images/1.png',
  //   }
  //   expect.assertions(3)
  //   db.getPlaylistDetailsById.mockReturnValue(Promise.resolve(playlistData))
  //   return request(server)
  //     .get('/api/v1/playlist/id')
  //     .then((res) => {
  //       expect(res.body.id).toBe(5)
  //       expect(res.body.name).toBe('Summer Lovin')
  //       expect(res.body.image).toBe('./public/images/1.png')
  //       return null
  //     })
  // })
  test('return status 500 and consoles error when problem', () => {
    db.addPlaylist.mockImplementation(() =>
      Promise.reject(new Error('test error message'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/playlist/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('test error message')
        return null
      })
  })
})
