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
      expect(tracks[3].id).toBe(4)
      expect(tracks[3].filepath).toBe('tracks/Sample5')
      expect(tracks[3].title).toBe('jam4')
      expect(tracks[3].artist).toBe('DJ JennyCraig')
      expect(tracks[3].album).toBe('watching you')
      expect(tracks[3].notes).toBe("it's sick")
      expect(tracks).toHaveLength(9)
    })
  })
})

describe('getTracksById', () => {
  test('gets single track by id', () => {
    const trackId = '1'
    expect.assertions(6)
    return getTrackById(trackId, testDb).then((track) => {
      expect(track.id).toBe(1)
      expect(track.filepath).toBe('tracks/Sample1')
      expect(track.title).toBe('jam1')
      expect(track.artist).toBe('DJ wildcard')
      expect(track.album).toBe('Watch yo back')
      expect(track.notes).toBe('The best album in the world')
    })
  })
})
