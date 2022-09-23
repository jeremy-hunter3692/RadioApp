const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const { getAllTracks, getTrackById } = require('../tracks.js')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getAllTracks', () => {
  test('gets all the tracks from the database', () => {
    expect.assertions(7)
    return getAllTracks(testDb).then((tracks) => {
      expect(tracks[8].id).toBe(9)
      expect(tracks[8].filepath).toBe('../public/tracks9')
      expect(tracks[8].title).toBe('handle this')
      expect(tracks[8].artist).toBe('DJ LoveHandles')
      expect(tracks[8].album).toBe('Can you handle it')
      expect(tracks[8].notes).toBe("it's lovely")
      expect(tracks).toHaveLength(9)
    })
  })
})

describe('getTracksById', () => {
  test('gets single track by id', () => {
    const trackId = '1'
    expect.assertions(6)
    return getTrackById(trackId, testDb).then((track) => {
      console.log(track)
      expect(track.id).toBe(1)
      expect(track.filepath).toBe('../public/tracks1')
      expect(track.title).toBe('jam1')
      expect(track.artist).toBe('DJ wildcard')
      expect(track.album).toBe('Watch yo back')
      expect(track.notes).toBe('The best album in the world')
    })
  })
})
