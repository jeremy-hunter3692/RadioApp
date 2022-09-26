import React, { useState, useEffect } from 'react'
import { getPlaylistById } from '../apis/playlist'
const init = 0

export default function AudioPlayer() {
  const [index, setIndex] = useState(init)
  const [audioTracks, setAudio] = useState([])
  const player = document.getElementById('audio')

  useEffect(() => {
    getPlaylistById(1)
      .then((playlist) => {
        let temp = playlist.tracks.map((x) => x.filepath)
        setAudio(temp)
      })
      .catch((err) => {
        console.error
      })

    if (index != 0) {
      player.play()
    }
  }, [index])

  console.log('audio', audioTracks)
  // const audio = [
  //   'tracks/Sample1.mp3',
  //   'tracks/Sample3.mp3',
  //   'tracks/Sample4.mp3',
  //   'tracks/Sample5.mp3',
  //   'tracks/Sample6.mp3',
  // ]

  function listener(evt) {
    if (index === audioTracks.length - 1) {
      setIndex(init)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <>
      <h1>audio:</h1>
      {audioTracks != null ? (
        <audio
          controls
          id='audio'
          onEnded={(evt) => {
            listener()
          }}
          src={audioTracks[index]}
          type='audio/wav'
        />
      ) : (
        <p>loading</p>
      )}
    </>
  )
}
