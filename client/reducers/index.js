import { combineReducers } from 'redux'

import landing from './landing'
import user from './user'
import playlists from './playlists'
import playlistById from './playlistById'
import track from './track'

export default combineReducers({
  landing: landing,
  user: user,
  playlists: playlists,
  playlistById: playlistById,
  track: track,
})
