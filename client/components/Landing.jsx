import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// ACTION CREATORS
import { fetchPlaylists } from '../actions/playlist'
// COMPONENTS
import AddPlaylist from './AddPlaylist'
import Container from './Container'
import GetPlaylistById from './GetPlaylistById'
import Playlist from './Playlist'
<<<<<<< HEAD
=======
import Track from './Track'
import AddTrack from './AddTrack'
>>>>>>> dev

export default function Landing() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlaylists())
  }, [])

  return (
    <Container>
      <div className='playlists centerThis'>
        <AddPlaylist />
        <Playlist />
      </div>

<<<<<<< HEAD
      <div className='track'>
        <GetPlaylistById />
=======
      <div>
        <Track />
        <AddTrack />
>>>>>>> dev
      </div>
    </Container>
  )
}
