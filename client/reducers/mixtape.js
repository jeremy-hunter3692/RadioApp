import {
  SET_MIXTAPE,
  FETCH_MIXTAPE_REQUEST,
  FETCH_MIXTAPE_SUCCESS,
  FETCH_MIXTAPE_FAILURE,
} from '../actions/mixtape'

const initialMixtapeState = { data: null, error: null }

const mixtapeReducer = (state = initialMixtapeState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_MIXTAPE_REQUEST:
      return { ...state, error: null }
    case FETCH_MIXTAPE_SUCCESS:
      return { data: payload.mixtape, error: null }
    case FETCH_MIXTAPE_FAILURE:
      return { ...state, error: payload.error }
    case 'ADD_MIXTAPE':
      return [...state, payload]
    case 'SET_MIXTAPE':
      return payload
    case 'DEL_MIXTAPE':
      return state.filter((mixtape) => mixtape !== payload)
    case 'UPDATE_MIXTAPE':
      return state.map((mixtape) => {
        return mixtape === payload.name ? payload.newName : mixtape
      })

    default:
      return state
  }
}

export default mixtapeReducer
