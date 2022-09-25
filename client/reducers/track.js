// REDUCER THAT HANDLES TRACK ACTIONS

import { ADD_TRACK_TO_DATABASE } from '../actions/track'
// gotta remember to include the action creators in /actions/track.js

const initialTrackState = []

const trackReducer = (state = initialTrackState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TRACK_TO_DATABASE:
      return [...state, payload]
    // case 'SET_TRACK':
    //   return payload
    // case 'DEL_TRACK':
    //   return state.filter((track) => track !== payload)
    // case 'UPDATE_TRACK':
    //   return state.map((track) => {
    //     return track === payload.name ? payload.newName : track
    // })

    default:
      return state
  }
}

export default trackReducer
