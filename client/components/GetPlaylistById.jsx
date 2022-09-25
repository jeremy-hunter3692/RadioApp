import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectPlaylistById } from '../actions/playlist'

export default function GetPlaylistById() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const {
    data: trackId,
    title,
    artist,
    playlistName,
    playlistId,
  } = useSelector((state) => state.tracks_playlist)

  console.log(
    'COMPONENT: ',
    id,
    trackId,
    title,
    artist,
    playlistId,
    playlistName
  )

  useEffect(() => {
    dispatch(selectPlaylistById(id))
  }, [])

  return (
    <>
      <div key={playlistId}>
        <h2>{playlistName}</h2>
      </div>
      <div>
        <h3>{title}</h3>
        <h3>{artist}</h3>
        <h3>{trackId}</h3>
      </div>
    </>
  )
}
