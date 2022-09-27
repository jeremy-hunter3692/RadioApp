// REDUCER THAT HANDLES PLAYLIST BY ID ACTIONS

const initialPlaylistState = { data: { tracks: [] }, error: null }

const playlistByIdReducer = (state = initialPlaylistState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_PLAYLIST_BY_ID':
      return { data: payload, error: null }
    case 'UPDATE_PLAYLIST_BY_ID':
      return { data: { ...payload, tracks: state.data.tracks }, error: null }
    case 'UPDATE_TRACK_BY_PLAYLIST':
      return {
        data: { ...state.data, tracks: [...state.data.tracks, payload] },
        error: null,
      }
    default:
      return state
  }
}

export default playlistByIdReducer
