import React from 'react'
import { useSelector } from 'react-redux'

export default function Playlist() {
  const info = useSelector((state) => state.playlist?.data)
  console.log('playlist component info', info)
  return (
    <>
      {info?.map((playlist) => {
        return (
          <div to={'/'} key={playlist.id} className='playlist'>
            {/* <img src={playlist.filepath} alt={playlist.name} width='100px' /> */}
            <h3>{playlist.name}</h3>
            <h3>{playlist.artist}</h3>
            <h3>{playlist.album}</h3>
            <h3>{playlist.title}</h3>
            <h3>{playlist.notes}</h3>
          </div>
        )
      })}
    </>
  )
}
