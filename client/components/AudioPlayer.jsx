import React, { useState } from 'react'

export default function AudioPlayer() {
  const [index, setIndex] = useState(0)

  const audio = [
    'tracks/BDS612AnalogJuice.wav',
    'BDS612AnalogPitched.wav',
    'BDS612AnalogPunch.wav',
    'BDS612Dark.wav',
    'CH606lip03.wav',
  ]

  function listener() {
    console.log('end')
    setIndex(index + 1)
  }

  // const audioElement = audio
  // // console.log(typeof audioElement, audioElement)
  // audioElement.addEventListener('loadeddata', () => {
  //   let duration = audioElement.duration
  //   console.log(duration)
  // })
  return (
    <>
      <h1>audio:</h1>

      <audio controls>
        <source
          id='audio'
          onEnded={listener}
          src={audio[index]}
          type='audio/wav'
        />
      </audio>
    </>
  )
}
