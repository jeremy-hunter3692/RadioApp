import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// ACTION CREATORS
// import { fetchLandingContent } from '../actions/landing'
import { fetchPlaylists } from '../actions/playlist'
// COMPONENTS
import AddPlaylist from './AddPlaylist'
import Container from './Container'
import Playlist from './Playlist'
import Track from './Track'
import AddTrack from './AddTrack'

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

      <div>
        <Track />
        <AddTrack />
      </div>
    </Container>
  )
}
