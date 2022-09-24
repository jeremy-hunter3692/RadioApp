import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './Landing'
import Header from './Header'
import Footer from './Footer'
import NotFound from './NotFound'
import Navbar from './Navbar'
import GetPlaylistById from './GetPlaylistById'

export default function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/playlists/:id' element={<GetPlaylistById />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
