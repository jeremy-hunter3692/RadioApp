// REDUCER THAT HANDLES TRACK ACTIONS

import { ADD_TRACK_TO_DATABASE } from '../actions/tracks'
import {
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE,
} from '../actions/track'
// gotta remember to include the action creators in /actions/track.js

const initialTrackState = []

const trackReducer = (state = initialTrackState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TRACK_TO_DATABASE:
      return [...state, payload]
    case FETCH_TRACKS_REQUEST:
      return { ...state, error: null }
    case FETCH_TRACKS_SUCCESS:
      return { data: payload.tracks, error: null }
    case FETCH_TRACKS_FAILURE:
      return { ...state, error: payload.error }
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
