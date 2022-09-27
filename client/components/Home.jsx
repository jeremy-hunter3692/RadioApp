import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// ACTION CREATORS
import { fetchPlaylists } from '../actions/playlist'
// COMPONENTS
// import AddPlaylist from './AddPlaylist'
import AddTrack from './AddTrack'
import Container from './Container'
import GetPlaylistById from './GetPlaylistById'
import Step1 from './Step1'

// import Playlist from './Playlist'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlaylists())
  }, [])

  const [step, setStep] = useState(1)

  // Go to next step
  const nextStep = () => {
    setStep(step + 1)
  }

  // Go back one step
  const backStep = () => {
    setStep(step - 1)
  }

  return (
    <Container>
      {step == 1 && (
        <>
          <h1> Step Add Playlist</h1>
          <div className='playlists centerThis'>
            <Step1 nextStep={nextStep} />
          </div>
        </>
      )}
      {step == 2 && (
        <>
          <h2>Step Add Tracks</h2>
          <div className=' centerThis'>
            <AddTrack nextStep={nextStep} backStep={backStep} />
          </div>
        </>
      )}
      {step == 3 && (
        <>
          <h2>Step Playlist and Tracks</h2>
          <div className=' centerThis'>
            {/* <Playlist /> */}
            <GetPlaylistById />
          </div>
        </>
      )}
    </Container>
  )
}
