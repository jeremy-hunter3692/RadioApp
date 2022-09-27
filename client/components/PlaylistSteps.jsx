import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// ACTION CREATORS
import { fetchPlaylists } from '../actions/playlist'
// COMPONENTS
import AddPlaylist from './AddPlaylist'
import AddTrack from './AddTrack'
import AssignTracks from './AssignTracks'
import AudioPlayer from './AudioPlayer'
import Container from './Container'
import GetPlaylistById from './GetPlaylistById'
import Playlist from './Playlist'

export default function Landing() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlaylists())
  }, [])

  const [step, setStep] = useState(1)

  // Go to next step - passed as props
  const nextStep = () => {
    setStep(step + 1)
  }

  // Go back one step - passed as props
  const backStep = () => {
    setStep(step - 1)
  }
  return (
    <Container>
      {step == 1 && (
        <>
          <div className='playlists'>
            <AddPlaylist nextStep={nextStep} />
          </div>
        </>
      )}
      {step == 2 && (
        <>
          <div className='centerThis'>
            <h2>Step 2 / Add Tracks</h2>
            <AddTrack
              nextStep={nextStep}
              backStep={backStep}
              className='column'
            />
            <AssignTracks className='column' />
          </div>
        </>
      )}
      {step == 3 && (
        <>
          <div className='centerThis'>
            <h2>Step 3 / Playlist and Tracks</h2>
            <Playlist />
            <GetPlaylistById />
            <AssignTracks />
            <AudioPlayer />
          </div>
        </>
      )}
    </Container>
  )
}

{
  /* <Container>
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
    </Container> */
}
