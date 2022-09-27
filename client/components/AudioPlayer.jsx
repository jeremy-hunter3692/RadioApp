import React, { useState, useEffect } from 'react'
import { getPlaylistById } from '../apis/playlist'
const init = 0

export default function AudioPlayer() {
  const [index, setIndex] = useState(init)
  const [audioTracks, setAudio] = useState([])
  const player = document.getElementById('audio')
  const id = 1

  useEffect(() => {
    setIndex(init)
    id
      ? getPlaylistById(id)
          .then((playlist) => {
            console.log(playlist.tracks)
            let tracks = playlist.tracks //.map((x) => x.filepath)
            setAudio(tracks)
          })
          .catch((err) => {
            console.error
          })
      : ' '
  }, [id])

  useEffect(() => {
    if (index != 0) {
      player.play()
    }
    // console.log(currentlyPlaying)
  }, [index])

  console.log('audio', audioTracks)

  function listener(evt) {
    if (index === audioTracks.length - 1) {
      setIndex(init)
    } else {
      setIndex(index + 1)
    }
  }

  function nextTrack() {
    if (index === audioTracks.length - 1) {
      setIndex(init)
    } else {
      setIndex(index + 1)
    }
    console.log(audioTracks[index])
  }

  function previousTrack() {
    if (index === audioTracks.length + 1) {
      setIndex(init)
    } else {
      setIndex(index - 1)
    }
    console.log(audioTracks[index])
  }

  return (
    <>
      <h1>
        {' '}
        Now playling: {audioTracks[index]?.title} - {audioTracks[index]?.artist}
      </h1>
      <button onClick={previousTrack}>Previous</button>
      {audioTracks != null ? (
        <audio
          controls
          id='audio'
          onEnded={(evt) => {
            listener()
          }}
          src={audioTracks[index]?.filepath}
          type='audio/wav'
        />
      ) : (
        <p>loading</p>
      )}
      <button onClick={nextTrack}>Next</button>
    </>
  )
}
