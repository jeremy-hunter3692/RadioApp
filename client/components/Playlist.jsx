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
            <h3>
              {playlist.id} / {playlist.name}
            </h3>
          </div>
        )
      })}
    </>
  )
}
