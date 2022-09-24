import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
import { selectPlaylistById } from '../actions/playlist'

export default function GetPlaylistById() {
  const {
    // data: trackId,
    title,
    artist,
    playlistName,
    playlistId,
  } = useSelector((state) => state.playlist)

  // const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(selectPlaylistById(1))
  }, [])

  return (
    <>
      <div key={playlistId}>
        <h2>{playlistName}</h2>
      </div>
      <div>
        <h3>{title}</h3>
        <h3>{artist}</h3>
        {/* <h3>{trackId}</h3> */}
      </div>
    </>
  )
}
