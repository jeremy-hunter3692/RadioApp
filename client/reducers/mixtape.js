// this is from my personal project and trying to decide whether to use it.  I think the other
const initialMixtapeState = { data: null, error: null }

const mixtapesReducer = (state = initialMixtapeState, action) => {
  const { type, payload } = action
  switch (type) {
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

export default mixtapesReducer
