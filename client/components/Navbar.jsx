import React from 'react'
import { Link } from 'react-router-dom'
// import mixtapeLogo from '../images/Cassette-Awesome.png'

export default function Navbar() {
  return (
    <header>
      <div className='navbar'>
        <ul>
          <li className='navItem'>
            <Link to='/'>
              <img src='favicon.png' alt='home' />
            </Link>
          </li>
          <li className='navItem'>
            <Link to='/upload-a-track'>Upload a Track</Link>
          </li>
          <li className='navItem'>
            <Link to='/add-a-playlist'>Add a Playlist</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
