import React from 'react'
import { Link } from 'react-router-dom'
// import mixtapeLogo from '../images/Cassette-Awesome.png'

export default function Navbar() {
  return (
    <header>
      <div className='navbar'>
        <ul>
          <li>
            <Link to='/'>
              <img src='favicon.png' alt='home' />
            </Link>
          </li>
          <li>
            <Link to='/playlists'>Browse Playlists</Link>
          </li>
          <li>
            <Link to='/tracks'>Browse Tracks</Link>
          </li>
          <li>
            <Link to='/add-a-track'>Add a Track</Link>
          </li>
          <li>
            <Link to='/add-a-playlist'>Add a Playlist</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
