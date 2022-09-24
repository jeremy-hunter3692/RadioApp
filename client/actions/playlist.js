import { getPlaylists, addPlaylist } from '../apis/playlist.js'

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
export const fetchNewPlaylist = (newPlaylist) => ({
  type: 'ADD_PLAYLIST',
  payload: newPlaylist,
})

export const fetchPlaylists = () => (dispatch) => {
  dispatch(fetchPlaylistsRequest())
  return getPlaylists()
    .then((playlists) => {
      dispatch(fetchPlaylistsSuccess(playlists))
    })
    .catch((error) => {
      dispatch(fetchPlaylistsFailure(error.message))
    })
}

export const addNewPlaylist = (newPlaylist) => (dispatch) => {
  return addPlaylist(newPlaylist)
    .then((playlists) => {
      dispatch(fetchNewPlaylist(playlists))
    })
    .catch((error) => {
      dispatch(fetchPlaylistsFailure(error.message))
    })
}
