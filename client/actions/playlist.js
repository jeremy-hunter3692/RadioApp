import { getPlaylists, addPlaylist, getPlaylistById } from '../apis/playlist.js'

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
export const fetchPlaylistById = (tracks_playlist) => ({
  type: 'GET_PLAYLIST_BY_ID',
  payload: tracks_playlist,
})
// note to self: id or tracks_playlist?

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
  dispatch(fetchPlaylistsRequest())
  return addPlaylist(newPlaylist)
    .then((playlist) => {
      dispatch(fetchNewPlaylist(playlist))
    })
    .catch((error) => {
      dispatch(fetchPlaylistsFailure(error.message))
    })
}

export const selectPlaylistById = (id) => (dispatch) => {
  dispatch(fetchPlaylistsRequest())
  console.log('id from actions', id)
  return getPlaylistById(id)
    .then((tracks_playlist) => {
      dispatch(fetchPlaylistById(tracks_playlist))
    })
    .catch((error) => {
      dispatch(fetchPlaylistsFailure(error.message))
    })
}
