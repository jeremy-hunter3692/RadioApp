import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './Landing'
import Header from './Header'
import Footer from './Footer'
import NotFound from './NotFound'
import Navbar from './Navbar'

export default function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
