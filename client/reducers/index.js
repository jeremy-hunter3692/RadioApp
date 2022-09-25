import { combineReducers } from 'redux'

import landing from './landing'
import user from './user'
import playlist from './playlist'
import track from './tracks'

export default combineReducers({
  landing: landing,
  user: user,
  playlist: playlist,
  track: track,
})
