// this is from my personal project and trying to decide whether to use it.  I think the other
const initialPlaylistState = { data: null, error: null }

const playlistsReducer = (state = initialPlaylistState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_MIXTAPE':
      return [...state, payload]
    case 'SET_MIXTAPE':
      return payload
    case 'DEL_MIXTAPE':
      return state.filter((playlist) => playlist !== payload)
    case 'UPDATE_MIXTAPE':
      return state.map((playlist) => {
        return playlist === payload.name ? payload.newName : playlist
      })

    default:
      return state
  }
}

export default playlistsReducer
