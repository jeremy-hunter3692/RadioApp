import React from 'react'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchLandingContent } from '../actions/landing'
import Container from './Container'
import Mixtape from './Mixtape'
import Song from './Song'

export default function Landing() {
  // const mixtape = useSelector((state) => state.mixtapeState)

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchLandingContent())
  // }, [])

  return (
    <Container>
      <Mixtape />
      <Song />
      <div>
        <img src='./images/404a.png' alt='404' />
      </div>
    </Container>
  )
}
