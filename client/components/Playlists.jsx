import React from 'react'

export default function individual(playlist) {
  return (
    <>
      {' '}
      <div key={playlist.key} className='playlist'>
        <img src={playlist.img} alt='images for mixtape' />
        <h3 className='playlistName'>{playlist.name}</h3>
      </div>
    </>
  )
}
