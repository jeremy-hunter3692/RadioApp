import React from 'react'
import { useSelector } from 'react-redux'

export default function Playlist() {
  const info = useSelector((state) => state.playlist?.data)
  return (
    <>
      {info?.map((playlist) => {
        return (
          <div key={playlist.id} className='playlist'>
            <h3>{playlist.name}</h3>
   
          </div>
        )
      })}
    </>
  )
}
