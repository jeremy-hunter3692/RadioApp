import React, { useState, useEffect } from 'react'
import { getPlaylistById } from '../apis/playlist'
const init = 0

export default function AudioPlayer() {
  const [index, setIndex] = useState(init)
  const player = document.getElementById('audio')

  useEffect(() => {
    if (index != 0) {
      player.play()
    }
  }, [index])
  // getPlaylistById(id)

  const audio = [
    'tracks/Sample1.mp3',
    'tracks/Sample3.mp3',
    'tracks/Sample4.mp3',
    'tracks/Sample5.mp3',
    'tracks/Sample6.mp3',
  ]

  function listener(evt) {
    if (index === audio.length - 1) {
      setIndex(init)
    } else {
      setIndex(index + 1)
    }
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
