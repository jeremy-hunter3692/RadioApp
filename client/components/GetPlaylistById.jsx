import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AudioPlayer from './AudioPlayer'

export default function GetPlaylistById(props) {
  const info = useSelector((state) => state.playlistById.data)
  useEffect(() => {}, [info])

  return (
    <>
      <div>
        <h2>{info?.name && info.name}</h2>
      </div>
      {info?.tracks &&
        info?.tracks.map((playlist) => {
          return (
            <div key={playlist.trackId}>
              <h2>{playlist.playlistName}</h2>
              <h3>{playlist.title}</h3>
              <h3>{playlist.artist}</h3>
              <h3>{playlist.trackId}</h3>
            </div>
          )
        })}
      {props.bool && <AudioPlayer id={info?.id} />}
    </>
  )
}
