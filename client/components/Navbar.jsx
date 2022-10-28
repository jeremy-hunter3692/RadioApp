import React from 'react'
import { Link } from 'react-router-dom'
// import mixtapeLogo from '../images/Cassette-Awesome.png'

export default function Navbar() {
  return (
    <header>
      <div className='navbar'>
        <ul>
          <li>
            <Link className='navItem' to='/upload-a-track'>
              Upload a Track
            </Link>
          </li>
          <li>
            <Link to='/'>
              <img src='/images/logo.png' alt='home' width='125' />
            </Link>
          </li>
          <li>
            <Link className='navItem' to='/add-a-playlist'>
              Add a Playlist
            </Link>
          </li>
          {/* <li>
            <Link to='/tracks/assign'>Assign Tracks to Playlists</Link>
          </li> */}
        </ul>
      </div>
    </header>
  )
}
