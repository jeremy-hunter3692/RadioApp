// Taken from Patchies because it's a slightly different format than what I've done before.

import { getMixtapes } from '../apis/mixtape.js'

export const FETCH_MIXTAPES_REQUEST = 'FETCH_MIXTAPES_REQUEST'
export const FETCH_MIXTAPES_SUCCESS = 'FETCH_MIXTAPES_SUCCESS'
export const FETCH_MIXTAPES_FAILURE = 'FETCH_MIXTAPES_FAILURE'

//Simple actions
export const fetchMixtapesRequest = () => ({
  type: FETCH_MIXTAPES_REQUEST,
})

export const fetchMixtapesSuccess = (mixtapes) => ({
  type: FETCH_MIXTAPES_SUCCESS,
  payload: { mixtapes },
})

export const fetchMixtapesFailure = (error) => ({
  type: FETCH_MIXTAPES_FAILURE,
  payload: { error },
})

export const fetchMixtapes = (token) => (dispatch) => {
  dispatch(fetchMixtapesRequest())
  getMixtapes(token)
    .then((mixtapes) => {
      dispatch(fetchMixtapesSuccess(mixtapes))
    })
    .catch((error) => {
      dispatch(fetchMixtapesFailure(error.message))
    })
}
