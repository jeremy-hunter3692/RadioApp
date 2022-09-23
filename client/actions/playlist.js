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

export function fetchPlaylists() {
  console.log('fetch')
  return (dispatch) => {
    return getPlaylists()
      .then((playlists) => {
        dispatch(fetchPlaylistsSuccess(playlists))
      })
      .catch((err) => {
        dispatch(fetchPlaylistsFailure(err.message))
      })
  }
}
// export const fetchPlaylists = () => (dispatch) => {
//   dispatch(fetchPlaylistsRequest())
//   return getPlaylists()
//     .then((playlists) => {
//       console.log('thunk', playlists)
//       dispatch(fetchPlaylistsSuccess(playlists))
//     })
//     .catch((error) => {
//       dispatch(fetchPlaylistsFailure(error.message))
//     })
// }
