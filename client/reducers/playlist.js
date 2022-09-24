// REDUCER THAT HANDLES PLAYLIST ACTIONS

import {
  FETCH_PLAYLISTS_REQUEST,
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLISTS_FAILURE,
} from '../actions/playlist'

// with audio files, we could use a loading gif and add that to the reducer state.
// loading : true

const initialPlaylistState = { data: null, error: null }

const playlistsReducer = (state = initialPlaylistState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_PLAYLISTS_REQUEST:
      return { ...state, error: null }
    case FETCH_PLAYLISTS_SUCCESS:
      return { data: payload.playlists, error: null }
    case FETCH_PLAYLISTS_FAILURE:
      return { ...state, error: payload.error }
    case 'ADD_PLAYLIST':
      return { data: [...state.data, payload], error: null }

    default:
      return state
  }
}

export default playlistsReducer
