// from Patch - my pets. wondering which format to follow, should discuss.

import {
  FETCH_MIXTAPES_REQUEST,
  FETCH_MIXTAPES_SUCCESS,
  FETCH_MIXTAPES_FAILURE,
} from '../actions/fromPatch'

const initialMixtapeState = { data: null, error: null }

const mixtapesReducer = (state = initialMixtapeState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_MIXTAPES_REQUEST:
      return { ...state, error: null }
    case FETCH_MIXTAPES_SUCCESS:
      return { data: payload.mixtape, error: null }
    case FETCH_MIXTAPES_FAILURE:
      return { ...state, error: payload.error }

    default:
      return state
  }
}

export default mixtapesReducer
