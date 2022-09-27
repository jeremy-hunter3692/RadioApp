import { getAllTracks } from '../apis/tracks.js'

export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST'
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS'
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE'

//Simple actions
export const fetchTracksRequest = () => ({
  type: FETCH_TRACKS_REQUEST,
})

export const fetchPlaylistsSuccess = (tracks) => ({
  type: FETCH_TRACKS_SUCCESS,
  payload: { tracks },
})

export const fetchPlaylistsFailure = (error) => ({
  type: FETCH_TRACKS_FAILURE,
  payload: { error },
})

export const fetchTracks = () => (dispatch) => {
  dispatch(fetchTracksRequest())
  return getAllTracks()
    .then((tracks) => {
      dispatch(fetchPlaylistsSuccess(tracks))
    })
    .catch((error) => {
      dispatch(fetchPlaylistsFailure(error.message))
    })
}
