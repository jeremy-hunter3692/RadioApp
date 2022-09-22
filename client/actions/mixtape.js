// from my personal project, trying to decide which to pursue

import { getMixtapes } from '../apis/mixtape'
export const SET_ERROR = 'SET_ERROR'

// all the mixtapes
export function setMixtapes(mixtapes) {
  return {
    type: 'SET_MIXTAPES',
    payload: { mixtapes },
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
    type: SET_ERROR,
    errMessage,
  }
}
