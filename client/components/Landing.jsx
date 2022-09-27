import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// ACTION CREATORS
import { fetchPlaylists } from '../actions/playlist'
// COMPONENTS
import Container from './Container'
import GetPlaylistById from './GetPlaylistById'
import Playlist from './Playlist'

export default function Landing() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlaylists())
  }, [])

  return (
    <>
      <Container>
        <div className='leftSide'>
          <Playlist />
        </div>
        <div className='rightSide'>
          <GetPlaylistById bool={true} />
        </div>
      </Container>
    </>
  )
}
