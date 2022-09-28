import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPlaylistById } from '../actions/playlist'

export default function Playlist() {
  const dispatch = useDispatch()
  const setDefault = 4
  const info = useSelector((state) => state.playlists?.data)
  // const selectedPlaylist = useSelector((state) => state.playlistsById?.data)
  const [selectedId, setSelectedId] = useState(setDefault)
  // const default = selectedId ?? 4
  useEffect(() => {
    dispatch(selectPlaylistById(selectedId))
  }, [])

  const findClass = (id) => {
    if (selectedId == id) {
      return 'selected'
    }
    return 'playlist'
  }

  const handleClick = (id) => {
    dispatch(selectPlaylistById(id))
    setSelectedId(id)
  }

  return (
    <>
      <div className='playlists'>
        {info?.map((playlists) => {
          return (
            <div
              key={playlists.id}
              className={findClass(playlists.id)}
              onClick={() => {
                handleClick(playlists.id)
              }}
            >
              <img src={playlists.image} alt={playlists.name} />
              <h3>{playlists.name}</h3>
            </div>
          )
        })}
      </div>
    </>
  )
}
