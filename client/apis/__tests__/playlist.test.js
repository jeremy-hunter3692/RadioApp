import nock from 'nock'
import { getPlaylists } from '../playlist'

const playlistMockData = [
  //TIDY UP MOCK DATA LATER
  {
    id: 1,
    creator: ' jimmyjim',
    name: 'peteypere',
    imagefilePath: '/mockImageUrl',
  },
]

describe('GET /api/v1/playlist', () => {
  it('gets playlists from api', async () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .get('/api/v1/playlist')
      .reply(200, playlistMockData)

    const playlistContent = await getPlaylists()
    expect(playlistContent).toEqual(playlistMockData)
    scope.done()
  })
})

// describe('GET /api/v1/playlist/id:', () => {
//   it('gets playlists from api', async () => {
//     expect.assertions(1)
//     const scope = nock('http://localhost')
//       .get('/api/v1/playlist')
//       .reply(200, playlistMockData)

//     const playlistContent = await getPlaylists()
//     expect(playlistContent).toEqual(playlistMockData)
//     scope.done()
//   })
// })
