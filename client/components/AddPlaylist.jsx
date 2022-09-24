import React, { useState } from 'react'
import { addNewPlaylist } from '../actions/playlist'
import { useDispatch } from 'react-redux'

const initialFormData = {
  name: '',
}

export default function AddPlaylist() {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialFormData)

  const handleChange = async (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(addNewPlaylist(form))
    setForm(initialFormData)
  }

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
        <button>Create your Mixtape</button>
      </form>
    </>
  )
}
