import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTrack } from '../actions/tracks'
import { getAudioFileUrl } from '../apis/tracks'
// For Cloudinary
import { useNavigate } from 'react-router-dom'

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
  // Added for the CLOUDINARY part of the form
  const [selectedFile, setSelectedFile] = useState(null)
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0])
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setForm(initialForm)

    const file = selectedFile
    try {
      const audioUrl = await getAudioFileUrl(file) // TODO: when auth0 is set up, need to pass token
      const newTrack = {
        ...form,
        filepath: audioUrl,
      }
      await dispatch(addNewTrack(newTrack))
      // TODO: when auth0 is set up, need to pass token
      navigate('.')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='title'>Track Name:</label>
        <input
          id='title'
          onChange={handleChange}
          value={form.title}
          name='title'
        />

        <label htmlFor='artist'>Artist Name:</label>
        <input
          id='artist'
          onChange={handleChange}
          value={form.artist}
          name='artist'
        />

        <label htmlFor='album'>Album Name:</label>
        <input
          id='album'
          onChange={handleChange}
          value={form.album}
          name='album'
        />

        <label htmlFor='notes'>Notes:</label>
        <input
          id='notes'
          onChange={handleChange}
          value={form.notes}
          name='notes'
        />
        <div>
          <label htmlFor='filepath'>Filepath: </label>
          <input
            id='filepath'
            type='file'
            //eslint-disable-next-line
            resource_type='video'
            name='filepath'
            accept='video/*'
            onChange={handleFileChange}
          />
        </div>

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
