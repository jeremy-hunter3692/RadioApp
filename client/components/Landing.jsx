import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// ACTION CREATORS
// import { fetchLandingContent } from '../actions/landing'
import { fetchPlaylists } from '../actions/playlist'
// COMPONENTS
import AddPlaylist from './AddPlaylist'
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

      <div>
        <GetPlaylistById />
      </div>
    </Container>
  )
}
