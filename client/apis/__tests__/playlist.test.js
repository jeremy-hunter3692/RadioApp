import nock from 'nock'
import { getPlaylists } from '../playlist'

const playlistMockData = [
  //TODO: TIDY UP MOCK DATA LATER - STRUCTURE OF DATA MAY HAVE CHANGED IN DB
  {
    id: 1,
    creator: ' jimmyjim',
    name: 'peteypete',
    imagefilePath: '/mockImageUrl',
  },
]

describe('GET /api/v1/playlist', () => {
  it('gets playlists from api', async () => {
    expect.assertions(2)
    const scope = nock('http://localhost')
      .get('/api/v1/playlist')
      .reply(200, playlistMockData)

    const playlistContent = await getPlaylists()
    expect(playlistContent).toEqual(playlistMockData)
    expect(scope.isDone()).toBe(true)
    scope.done()
  })
})
