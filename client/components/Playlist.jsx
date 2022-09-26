import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPlaylistById } from '../actions/playlist'

export default function Playlist() {
  const dispatch = useDispatch()
  const info = useSelector((state) => state.playlists?.data)

  const handleClick = (event, id) => {
    dispatch(selectPlaylistById(id))
  }

  return (
    <>
      {info?.map((playlists) => {
        return (
          <div
            key={playlists.id}
            className='playlist'
            onClick={(event) => {
              handleClick(event, playlists.id)
            }}
          >
            <img src={playlists.image} alt={playlists.name} />
            <h3>{playlists.name}</h3>
          </div>
        )
      })}
    </>
  )
}
