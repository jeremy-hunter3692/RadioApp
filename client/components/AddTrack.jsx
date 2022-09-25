import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTrack } from '../actions/tracks'

const initialForm = {
  title: '',
  artist: '',
  album: '',
  notes: '',
  filepath: '',
}

export default function AddTrack() {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialForm)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addNewTrack(form))
    setForm(initialForm)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='title' className='label'>
          Track Name:
        </label>
        <input
          id='title'
          onChange={handleChange}
          value={form.title}
          name='title'
        />

        <label htmlFor='artist' className='label'>
          Artist Name:
        </label>
        <input
          id='artist'
          onChange={handleChange}
          value={form.artist}
          name='artist'
        />

        <label htmlFor='album' className='label'>
          Album Name:
        </label>
        <input
          id='album'
          onChange={handleChange}
          value={form.album}
          name='album'
        />

        <label htmlFor='notes' className='label'>
          Notes:
        </label>
        <input
          id='notes'
          onChange={handleChange}
          value={form.notes}
          name='notes'
        />

        <label htmlFor='filepath' className='label'>
          Filepath:
        </label>
        <input
          id='filepath'
          onChange={handleChange}
          value={form.filepath}
          name='filepath'
        />

        <div>
          <button>Add a new track</button>

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
