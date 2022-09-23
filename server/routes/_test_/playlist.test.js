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
