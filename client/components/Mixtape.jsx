import React from 'react'
const info = [
  {
    id: 1,
    name: 'The Fillmore',
    creator: 'DJ Craig',
    imageFilepath: './images/mixtape1.png',
    // note - just make a random generator of images and put it with the playlist component.
  },
  {
    id: 2,
    name: 'K-Pop',
    creator: 'Nani',
    imageFilepath: './images/mixtape16.png',
  },
  {
    id: 3,
    name: 'The Boom Boom Room',
    creator: 'DJ Jeremy',
    imageFilepath: './images/mixtape3.png',
  },
  {
    id: 4,
    name: 'Rolling Stone',
    creator: 'DJ Peter',
    imageFilepath: './images/mixtape8.png',
  },
]
export default function Mixtape() {
  console.log(info)
  return (
    <>
      {info.map((mixtape) => {
        return (
          <div to={'/'} key={mixtape.id}>
            <h2>Mixtape</h2>
            <img src={mixtape.imageFilepath} alt={mixtape.name} width='100px' />
            <h3>{mixtape.name}</h3>
            <h3>{mixtape.creator}</h3>
          </div>
        )
      })}
    </>
  )
}
