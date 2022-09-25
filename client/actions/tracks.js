import { addTrackToDb } from '../apis/tracks.js'

export const ADD_TRACK_TO_DATABASE = 'ADD_TRACK_TO_DATABASE'

// ------------------
// ADDING A NEW TRACK
// ------------------

export function addNewTrack(newTrack) {
  return (dispatch) => {
    return addTrackToDb(newTrack).then((newTrack) => {
      dispatch(createNewTrack(newTrack))
    })
  }
}

export function createNewTrack(newTrack) {
  return {
    type: ADD_TRACK_TO_DATABASE,
    payload: newTrack,
  }
}
