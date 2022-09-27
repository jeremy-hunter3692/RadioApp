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
      expect(tracks[2].id).toBe(3)
      expect(tracks[2].filepath).toBe('tracks/Sample4.mp3')
      expect(tracks[2].title).toBe('jam33')
      expect(tracks[2].artist).toBe('DJ Nani')
      expect(tracks[2].album).toBe('Queen Nani')
      expect(tracks[2].notes).toBe("it's lit")
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
      expect(track.filepath).toBe(
        'https://res.cloudinary.com/dwjfqnyxs/video/upload/v1664157078/diwaul89qwnzdaurdigu.mp3'
      )
      expect(track.title).toBe('South Island')
      expect(track.artist).toBe('The Trainsurfers')
      expect(track.album).toBe('The Trainsurfers Greatest Hit')
      expect(track.notes).toBe("Ollie's future number one hit!")
    })
  })
})
