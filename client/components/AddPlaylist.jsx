import React, { useState } from 'react'
// import { addPlaylist } from '../actions/_playlist_'
//import { useDispatch } from 'react-redux'
import { addPlaylist, getAudioFile } from '../apis/playlist'
import { useNavigate } from 'react-router-dom'

const initialFormData = {
  name: '',
}

export default function AddPlaylist() {
  //const dispatch = useDispatch()
  const [form, setForm] = useState(initialFormData)
  // CLOUDINARY
  const [selectedFile, setSelectedFile] = useState(null)
  const navigate = useNavigate()

  const handleChange = async (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // >>> This is what here, but have replaced with the handleSubmit function below, taken from Patch project
  // >>> to deal with Cloudinary
  //   const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   dispatch(addPlaylist(form))
  //   setForm(initialFormData)
  // }

  // CLOUDINARY
  function handleFileChange(e) {
    setSelectedFile(e.target.files[0])
  }

  async function handleSubmit(e) {
    e.preventDefault()
    //const token = await getAccessTokenSilently()  //TODO: auth0
    const file = selectedFile
    try {
      const audioUrl = await getAudioFile(file) // TODO: when auth0 is set up, need to pass token
      const playlist = {
        ...form,
        audioUrl,
      }
      await addPlaylist(playlist) // TODO: when auth0 is set up, need to pass token
      navigate('.')
    } catch (err) {
      console.log(err)
    }
    // const handleSubmit = async (event) => {
    //   event.preventDefault()
    //   dispatch(addNewPlaylist(form))
    //   setForm(initialFormData)
    // }

    return (
      <>
        <form onSubmit={handleSubmit} className='form'>
          <input
            id='name'
            onChange={handleChange}
            value={form.name}
            name='name'
            placeholder='Give your Mixtape a name.'
          />
          <input
            id='creator'
            onChange={handleChange}
            value={form.creator}
            name='creator'
            placeholder='What is your name?'
          />
          <div>
            <label htmlFor='image'>Upload an image</label>
            <input
              id='image'
              type='file'
              name='image'
              accept='image/*'
              onChange={handleFileChange}
              className='border-black-300 bg-white-300 shadow-black-100 rounded-md border-2 text-center shadow-md'
            />
          </div>

          <button>Create your Mixtape</button>
        </form>
      </>
    )
  }
}
