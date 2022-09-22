import { getMixtapes } from '../apis/mixtape'

export const FETCH_MIXTAPE_REQUEST = 'FETCH_MIXTAPE_REQUEST'
export const FETCH_MIXTAPE_SUCCESS = 'FETCH_MIXTAPE_SUCCESS'
export const FETCH_MIXTAPE_FAILURE = 'FETCH_MIXTAPE_FAILURE'

export const fetchMixtapeRequest = () => ({
  type: FETCH_MIXTAPE_REQUEST,
})

// all the mixtapes
export function setMixtapes(mixtapes) {
  return {
    type: 'SET_MIXTAPE',
    payload: mixtapes,
  }
}

export function addMixtape(newMixtape) {
  return (dispatch) => {
    return addMixtape(newMixtape)
      .then(() => {
        dispatch(fetchMixtapes())
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function fetchMixtapes() {
  return (dispatch) => {
    return getMixtapes()
      .then((mixtapes) => {
        dispatch(setMixtapes(mixtapes))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function setError(errMessage) {
  return {
    type: FETCH_MIXTAPE_FAILURE,
    errMessage,
  }
}
