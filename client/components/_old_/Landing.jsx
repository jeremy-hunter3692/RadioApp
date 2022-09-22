import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import styles from './Landing.module.scss'

import { fetchLandingContent } from '../../actions/landing'
import Display from './Display'

export default function Landing() {
  const dispatch = useDispatch()
  // const landing = useSelector((state) => state.landing)

  useEffect(() => dispatch(fetchLandingContent()), [])

  return (
    <>
      <div>
        <Display
        // imageUrl={landing.imageUrl}
        // captionText={landing.captionText}
        />
      </div>
    </>
  )
}
