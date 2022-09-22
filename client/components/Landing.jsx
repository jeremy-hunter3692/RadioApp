import React from 'react'
import AddPlaylist from './AddPlaylist'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchLandingContent } from '../actions/landing'
import Container from './Container'
import Playlist from './Playlist'
import Track from './Track'

export default function Landing() {
  // const playlist = useSelector((state) => state.playlistState)

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchLandingContent())
  // }, [])

  return (
    <Container>
      <div className='playlists centerThis'>
        <AddPlaylist />
        <Playlist />
      </div>

      <div>
        <Track />
      </div>
    </Container>
  )
}
