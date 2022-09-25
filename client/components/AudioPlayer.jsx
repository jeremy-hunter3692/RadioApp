import React, { useState } from 'react'
import { getPlaylistById } from '../apis/playlist'
const init = 0

export default function AudioPlayer() {
  const [index, setIndex] = useState(init)
  const player = document.getElementById('audio')

  getPlaylistById(id)

  const audio = [
    'tracks/BDS612AnalogJuice.wav',
    'tracks/BDS612AnalogPitched.wav',
    'tracks/BDS612AnalogPunch.wav',
    'tracks/BDS612Dark.wav',
    'tracks/CH606lip03.wav',
  ]

  function listener(evt) {
    if (index === audio.length - 1) {
      setIndex(init)
    } else {
      setIndex(index + 1)
    }
    console.log(player, typeof player)
    player.play()
  }

  return (
    <>
      <h1>audio:</h1>
      <audio
        controls
        id='audio'
        onEnded={(evt) => {
          listener()
        }}
        src={audio[index]}
        type='audio/wav'
      />
    </>
  )
}
