import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// ACTION CREATORS
import { fetchPlaylists } from '../actions/playlist'
// COMPONENTS
import Container from './Container'
import GetPlaylistById from './GetPlaylistById'
import Playlist from './Playlist'
// import PlaylistSteps from './PlaylistSteps'

export default function Landing() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlaylists())
  }, [])

  return (
    <>
      <Container>
        <div className='flex-container'>
          <div className='flex-child'>
            <Playlist />
          </div>
          <div className='flex-child'>
            <GetPlaylistById bool={true} />
            {/* <PlaylistSteps /> */}
          </div>
        </div>
      </Container>
    </>
  )
}
