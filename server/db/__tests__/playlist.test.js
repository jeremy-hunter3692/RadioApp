const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const {
  getAllPlaylists,
  addPlaylist,
  addTracksToPlaylist,
} = require('../playlist.js')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('addPlayListName', () => {
  test('adds a playlist name', () => {
    const name = { name: 'test play list name' }

    return addPlaylist(name, testDb)
      .then(() => {
        return testDb('playlist').select()
      })
      .then((result) => {
        expect(result).toHaveLength(5)
        expect(result[2].name).toBe('Cool Jazz')
        expect(result[2].image_id).toBe('3')
      })
  })
})

describe('addTracksToPlaylist', () => {
  test('adds an array of track to a playlist', () => {
    const tracksData = [
      { track_Id: 3, playlist_id: 9 },
      { track_Id: 5, playlist_id: 9 },
      { track_Id: 8, playlist_id: 9 },
    ]

    return addTracksToPlaylist(tracksData, testDb)
      .then(() => {
        return testDb('tracks_playlist').select()
      })
      .then((result) => {
        expect(result).toHaveLength(13)
      })
  })
})

describe('getAllPlaylists', () => {
  test('returns all the playlists', () => {
    return getAllPlaylists(testDb).then((playlists) => {
      expect(playlists).toHaveLength(4)
      expect(playlists[2].name).toBe('Cool Jazz')
      expect(playlists[2].id).toBe(3)
    })
  })
})
