import { combineReducers } from 'redux'

import landing from './landing'
import user from './user'
<<<<<<< HEAD
import playlists from './playlists'
import playlistById from './playlistById'
import track from './track'
=======
import playlist from './playlist'
import track from './tracks'
>>>>>>> dev

export default combineReducers({
  landing: landing,
  user: user,
  playlists: playlists,
  playlistById: playlistById,
  track: track,
})
