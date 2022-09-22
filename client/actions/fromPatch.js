// Taken from Patchies because it's a slightly different format than what I've done before.

import { getPlaylists } from '../apis/playlist.js'

export const FETCH_PLAYLISTS_REQUEST = 'FETCH_PLAYLISTS_REQUEST'
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS'
export const FETCH_PLAYLISTS_FAILURE = 'FETCH_PLAYLISTS_FAILURE'

//Simple actions
export const fetchPlaylistsRequest = () => ({
  type: FETCH_PLAYLISTS_REQUEST,
})

export const fetchPlaylistsSuccess = (playlists) => ({
  type: FETCH_PLAYLISTS_SUCCESS,
  payload: { playlists },
})

export const fetchPlaylistsFailure = (error) => ({
  type: FETCH_PLAYLISTS_FAILURE,
  payload: { error },
})

export const fetchPlaylists = (token) => (dispatch) => {
  dispatch(fetchPlaylistsRequest())
  getPlaylists(token)
    .then((playlists) => {
      dispatch(fetchPlaylistsSuccess(playlists))
    })
    .catch((error) => {
      dispatch(fetchPlaylistsFailure(error.message))
    })
}
