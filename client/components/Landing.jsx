import React from 'react'
import AddMixtape from './AddMixtape'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchLandingContent } from '../actions/landing'
import Container from './Container'
import Mixtape from './Mixtape'
import Track from './Track'

export default function Landing() {
  // const mixtape = useSelector((state) => state.mixtapeState)

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchLandingContent())
  // }, [])

  return (
    <Container>
      <div className='mixtapes centerThis'>
        <AddMixtape />
        <Mixtape />
      </div>

      <div>
        <Track />
      </div>
    </Container>
  )
}
