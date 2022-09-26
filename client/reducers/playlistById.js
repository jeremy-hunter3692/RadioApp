// REDUCER THAT HANDLES PLAYLIST BY ID ACTIONS

const initialPlaylistState = { data: null, error: null }

const playlistByIdReducer = (state = initialPlaylistState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_PLAYLIST_BY_ID':
      console.log('reducer', payload)
      return { data: payload, error: null }
    default:
      return state
  }
}

export default playlistByIdReducer
