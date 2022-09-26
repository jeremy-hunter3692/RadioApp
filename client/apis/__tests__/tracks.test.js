import nock from 'nock'
import { addTrackToDb } from '../tracks'

const rootUrl = 'http://localhost'

const fakeTrack = [
  //TODO: TIDY UP MOCK DATA LATER - STRUCTURE OF DATA MAY HAVE CHANGED IN DB
  {
    title: 'Hey',
    artist: 'Pixies',
    album: 'Doolittle',
    notes: 'A classic!',
    filepath: '/mockfilepath',
  },
]

// const falseTrack = [
//   //TODO: TIDY UP MOCK DATA LATER - STRUCTURE OF DATA MAY HAVE CHANGED IN DB
//   {
//     title: ' Debaser',
//     artist: 'Pixies',
//     album: 'Doolittle',
//     notes: 'A classic!',
//     filepath: '/mockfilepath',
//   },
// ]
describe('POST /api/v1/tracks', () => {
  it('API returns the track that was just added', async () => {
    expect.assertions(2)
    const scope = nock(rootUrl).post('/api/v1/tracks').reply(200, fakeTrack)

    const trackContent = await addTrackToDb()
    expect(trackContent).toEqual(fakeTrack)
    // expect(trackContent).not.toBe(falseTrack)
    expect(scope.isDone()).toBe(true)
    scope.done()
  })
})

// describe('Error case: POST /api/v1/tracks', () => {
//   it('returns an error', async () => {
//     expect.assertions(2)
//     const errorMessage = 'Not Found'
//     const scope = nock(rootUrl)
//       .post('/api/v1/tracks')
//       .replyWithError(errorMessage)
//     return addTrackToDb(fakeTrack).then(() => {
//       expect(scope.isDone()).toBeTruthy()
//       expect(console.error).toHaveBeenCalledWith(errorMessage)
//     })
//   })
// })
