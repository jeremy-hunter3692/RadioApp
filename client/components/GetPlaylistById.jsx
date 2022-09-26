import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function GetPlaylistById() {
  const info = useSelector((state) => state.playlistById?.data)

  useEffect(() => {}, [info])

  return (
    <>
      <div>
        <h2>
          {info?.tracks &&
            info?.tracks.length > 0 &&
            info?.tracks[0].playlistName}
        </h2>
      </div>
      {info?.tracks.map((playlist) => {
        return (
          <div key={playlist.trackId}>
            <h3>{playlist.title}</h3>
            <h3>{playlist.artist}</h3>
            <h3>{playlist.trackId}</h3>
          </div>
        )
      })}
    </>
  )
}
