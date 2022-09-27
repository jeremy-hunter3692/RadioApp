import { addTrackToDb } from '../apis/tracks.js'

export const ADD_TRACK_TO_DATABASE = 'ADD_TRACK_TO_DATABASE'
export const UPDATE_TRACK_BY_PLAYLIST = 'UPDATE_TRACK_BY_PLAYLIST'
// ------------------
// ADDING A NEW TRACK
// ------------------

export function addNewTrack(newTrack) {
  return (dispatch) => {
    return addTrackToDb(newTrack).then((result) => {
      dispatch(createNewTrack(result))
      dispatch(updateNewTrack({ ...newTrack, id: result[0] }))
    })
  }
}

export function createNewTrack(newTrack) {
  return {
    type: ADD_TRACK_TO_DATABASE,
    payload: newTrack,
  }
}
export function updateNewTrack(newTrack) {
  return {
    type: 'UPDATE_TRACK_BY_PLAYLIST',
    payload: newTrack,
  }
}
