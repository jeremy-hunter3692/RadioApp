import React, { useEffect, useState } from 'react'

import { assignTracktoPlaylist, getPlaylists } from '../apis/playlist'
import { getAllTracks } from '../apis/tracks'

const initialForm = {
  track: '',
  playlist: '',
}

export default function AssignTracks() {
  const [form, setForm] = useState(initialForm)
  const [tracks, setTracks] = useState([])
  const [playlists, setPlaylists] = useState([])

  // Get the list of tracks from the db and store them in state as 'tracks'
  useEffect(() => {
    return getAllTracks().then((allTracks) => {
      console.log('tracks', allTracks)
      setTracks(allTracks)
    })
  }, [])

  // Get the list of playlists from the db and store them in state as 'playlists'
  useEffect(() => {
    return getPlaylists().then((allPlaylists) => {
      console.log('playlists', allPlaylists)
      setPlaylists(allPlaylists)
    })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    assignTracktoPlaylist(form)
    console.log('form:', form)
    setForm(initialForm)
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log('handleChange: e.target.name', e.target.name)
    console.log('handleChange: e.target.value', e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='track'>Assign a track to a mixtape:</label>

        <select id='track' name='track' defaultValue='' onChange={handleChange}>
          <option value='' disabled>
            Choose track
          </option>
          {tracks.map((track) => (
            <option key={track.id} value={track.id} title='Choose a track'>
              {track.title}
            </option>
          ))}
        </select>

        <select
          id='playlist'
          name='playlist'
          //value={form.playlist}
          defaultValue=''
          onChange={handleChange}
        >
          <option value='' disabled>
            Choose playlist
          </option>
          {playlists.map((playlist) => (
            <option key={playlist.id} value={playlist.id}>
              {playlist.name}
            </option>
          ))}
        </select>

        {/* <label htmlFor='playlist'>Playlist Name:</label>
        <input
          id='playlist'
          onChange={handleChange}
          value={form.playlist}
          name='playlist'
        /> */}

        <div>
          <button>Assign track to Mixtape</button>

          <button
            onClick={(e) => {
              e.preventDefault()
              setForm(initialForm)
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}
