import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// ACTION CREATORS
import { fetchPlaylists } from '../actions/playlist'
// COMPONENTS
import Container from './Container'
import GetPlaylistById from './GetPlaylistById'
import Playlist from './Playlist'
import PlaylistSteps from './PlaylistSteps'

export default function Landing({ bool }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlaylists())
  }, [])

  return (
    <>
      <Container>
        <h1>Mixtape, Music for Mixed Tastes</h1>
        <div className='flex-container'>
          <div className='flex-child'>
            <Playlist />
          </div>
          <div className='flex-child'>
            <PlaylistSteps />
            <GetPlaylistById bool={true} />
          </div>
        </div>
      </Container>
    </>
  )
}
