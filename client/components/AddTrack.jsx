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
//const initialFilepath ={filepath:''}

export default function AddTrack(props) {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialForm)
  // Added for the CLOUDINARY part of the form
  // Note that to import audio files into Cloudinary, you need to set the resource_type to be 'video', which you'll see down in the form HTML
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
    // Reset the fields to their initial (null) values
    setForm(initialForm)
    // TODO: work out how to get the Filepath to clear once new track added.

    // Deal with the Cloudinary file upload. Wait for it to return the URL for the uploaded file.
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
    props.nextStep()
  }

  // In the <input> tags, note the use of required - this is an easy way of preventing the form from being submited with empty values
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <input
          id='title'
          onChange={handleChange}
          value={form.title}
          name='title'
          required
          placeholder='Track Name'
        />

        <input
          id='artist'
          onChange={handleChange}
          value={form.artist}
          name='artist'
          required
          placeholder='Artist Name'
        />

        <input
          id='album'
          onChange={handleChange}
          value={form.album}
          name='album'
          placeholder='Album Name'
          required
        />

        <input
          id='notes'
          onChange={handleChange}
          value={form.notes}
          name='notes'
          placeholder='Add some notes'
          required
        />
        <div>
          <input
            id='filepath'
            type='file'
            //eslint-disable-next-line
            resource_type='video'
            name='filepath'
            accept='video/*'
            onChange={handleFileChange}
            required
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault()
            setForm(initialForm)
            props.backStep()
          }}
        >
          Cancel
        </button>
        <button>Add a new track</button>
      </form>
    </>
  )
}
