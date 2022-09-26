// REDUCER THAT HANDLES PLAYLIST ACTIONS

const initialPlaylistState = { data: null, error: null }

// const initialPlaylistState = []

const playlistByIdReducer = (state = initialPlaylistState, action) => {
  console.log('REDUCER ACTION: ', action)
  const { type, payload } = action
  switch (type) {
    case 'GET_PLAYLIST_BY_ID':
      console.log('REDUCER: ', payload)
      return { data: payload, error: null }

    default:
      return state
  }
}

export default playlistByIdReducer
