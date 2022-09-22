// from Patch - my pets. wondering which format to follow, should discuss.

import {
  FETCH_PLAYLISTS_REQUEST,
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLISTS_FAILURE,
} from '../actions/fromPatch'

const initialPlaylistState = { data: null, error: null }

const playlistsReducer = (state = initialPlaylistState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_PLAYLISTS_REQUEST:
      return { ...state, error: null }
    case FETCH_PLAYLISTS_SUCCESS:
      return { data: payload.playlist, error: null }
    case FETCH_PLAYLISTS_FAILURE:
      return { ...state, error: payload.error }

    default:
      return state
  }
}

export default playlistsReducer
