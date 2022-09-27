import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTracks } from '../actions/track'

export default function Tracks() {
  const dispatch = useDispatch()
  const info = useSelector((state) => state.tracks?.data)

  useEffect(() => {
    dispatch(fetchTracks())
  }, [])

  return (
    <>
      {info?.map((tracks) => {
        return (
          <div key={tracks.id} className='track'>
            {/* <img src={tracks.imageFilepath} alt={tracks.name} width='100px' /> */}
            <div className='areaDetails'>
              <h3 className='areaLabel'>{tracks.name}</h3>
              <h3>{tracks.artist}</h3>
            </div>
          </div>
        )
      })}
    </>
  )
}
// const info = [
//   {
//     id: 1,
//     playlistID: 2,
//     name: 'Black Swan',
//     artist: 'BTS',
//     imageFilepath: '/images/tracks/bts-blackswan.png',
//   },
//   {
//     id: 2,
//     playlistID: 2,
//     name: 'Go Go',
//     artist: 'BTS',
//     imageFilepath: '/images/tracks/bts-gogo.png',
//   },
//   {
//     id: 3,
//     playlistID: 2,
//     name: 'Mic Drop',
//     artist: 'BTS',
//     imageFilepath: '/images/tracks/bts-micdrop.png',
//   },
//   {
//     id: 4,
//     playlistID: 2,
//     name: 'On',
//     artist: 'BTS',
//     imageFilepath: '/images/tracks/bts-on.png',
//   },
// ]
