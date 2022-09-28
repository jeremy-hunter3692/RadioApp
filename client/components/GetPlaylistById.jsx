import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AudioPlayer from './AudioPlayer'

export default function GetPlaylistById(props) {
  const info = useSelector((state) => state.playlistById.data)
  useEffect(() => {}, [info])

  return (
    <>
      <div>
        <div>
          <h2>{info?.name && info.name}</h2>
          <div>{props.bool && <AudioPlayer id={info?.id} />}</div>
        </div>
        <div>
          {info?.tracks &&
            info?.tracks.map((playlist) => {
              return (
                <div key={playlist.trackId}>
                  <h2>{playlist.playlistName}</h2>
                  <div className='track'>
                    <h3>
                      <strong>Song:</strong> {playlist.title}
                    </h3>
                    <h3>
                      <strong>Artist:</strong> {playlist.artist}
                    </h3>
                    <h3>
                      <strong>Album:</strong> {playlist.album}
                    </h3>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}
