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

      <div className='track'>
        <GetPlaylistById />
      </div>
      <div>
        <AddTrack />
      </div>
    </Container>
  )
}
