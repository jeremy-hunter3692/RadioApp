import { combineReducers } from 'redux'

import landing from './landing'
import user from './user'
import mixtape from './mixtape'
import track from './track'

export default combineReducers({
  landing: landing,
  user: user,
  mixtape: mixtape,
  track: track,
})
