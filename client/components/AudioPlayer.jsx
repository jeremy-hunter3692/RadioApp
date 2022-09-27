import React, { useState, useEffect } from 'react'
import { getPlaylistById } from '../apis/playlist'
const init = 0

export default function AudioPlayer({ id }) {
  const [index, setIndex] = useState(init)
  const [audioTracks, setAudio] = useState([])
  const player = document.getElementById('audio')
  //const id = 1

  useEffect(() => {
    setIndex(init)
    id
      ? getPlaylistById(id)
          .then((playlist) => {
            let tracks = playlist.tracks //.map((x) => x.filepath)
            setAudio(tracks)
          })
          .catch((err) => {
            console.error(err)
          })
      : ' '
  }, [id])

  useEffect(() => {
    if (index != 0) {
      player.play()
    }
    // console.log(currentlyPlaying)
  }, [index])

  function listener() {
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
  }

  function previousTrack() {
    if (index === audioTracks.length + 1) {
      setIndex(init)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <>
      <h1 className='nowPlaying'>
        Now playing: {audioTracks[index] && audioTracks[index]?.title} -{' '}
        {audioTracks[index] && audioTracks[index]?.artist}
      </h1>
      <button onClick={previousTrack}>Previous</button>
      {audioTracks != null ? (
        <audio
          controls
          id='audio'
          onEnded={() => {
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
