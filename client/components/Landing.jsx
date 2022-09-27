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
        <div className='playlists'>
          <Playlist className='column' />
          <div>
            <GetPlaylistById className='column' bool={true} />
          </div>
        </div>
      </Container>
    </>
  )
}
