import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// ACTION CREATORS
import { fetchPlaylists } from '../actions/playlist'
// COMPONENTS
import AddPlaylist from './AddPlaylist'
import AddTrack from './AddTrack'
import Container from './Container'
import GetPlaylistById from './GetPlaylistById'
import Playlist from './Playlist'
import Track from './Track'
import AudioPlayer from './AudioPlayer'

import AssignTracks from './AssignTracks'

export default function Landing() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlaylists())
  }, [])

  return (
    <Container>
      <div className='playlists centerThis'>
        <AudioPlayer />
        <AddPlaylist />
        <Playlist />
      </div>

      <div className='track'>
        <GetPlaylistById />
      </div>
      <div>
        <AssignTracks />
      </div>
      <div>
        <Track />
        <AddTrack />
      </div>
    </Container>
  )
}
