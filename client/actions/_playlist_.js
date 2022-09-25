// from my personal project, trying to decide which to pursue

import { getPlaylists } from '../apis/playlist'
export const SET_ERROR = 'SET_ERROR'

// all the playlists
export function setPlaylists(playlists) {
  return {
    type: 'SET_PLAYLISTS',
    payload: { playlists },
  }
}

export function addPlaylist(newPlaylist) {
  return (dispatch) => {
    return addPlaylist(newPlaylist)
      .then(() => {
        dispatch(fetchPlaylists())
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function fetchPlaylists() {
  return (dispatch) => {
    return getPlaylists()
      .then((playlists) => {
        dispatch(setPlaylists(playlists))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}

// export function fetchPlaylists() {
//   return (dispatch) => {
//     return getPlaylists()
//       .then((playlists) => {
//         dispatch(fetchPlaylistsSuccess(playlists))
//       })
//       .catch((err) => {
//         dispatch(fetchPlaylistsFailure(err.message))
//       })
//   }
// }
// export function addNewPlaylist(newPlaylist) {
//   return (dispatch) => {
//     return addPlaylist(newPlaylist)
//       .then((playlists) => {
// console.log('actions', playlists)
//         dispatch(fetchNewPlaylist(playlists))
//         return null
//       })
//       .catch((err) => {
//         dispatch(fetchPlaylistsFailure(err.message))
//       })
//   }
// }
