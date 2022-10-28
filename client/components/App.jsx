import React from 'react'
import { Routes, Route } from 'react-router-dom'
// COMPONENTS
import AddTrack from './AddTrack'
import Footer from './Footer'
import GetPlaylistById from './GetPlaylistById'
import Header from './Header'
import Landing from './Landing'
import Playlist from './Playlist'
import PlaylistSteps from './PlaylistSteps'
import Tracks from './Tracks'
// import AssignTracks from './AssignTracks'
import NotFound from './NotFound'

export default function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/add-a-playlist' element={<PlaylistSteps />} />
          <Route path='/upload-a-track' element={<AddTrack />} />
          <Route path='/playlists' element={<Playlist />} />
          <Route path='/tracks' element={<Tracks />} />
          {/* <Route path='/tracks/assign' element={<AssignTracks bool={true} />} /> */}
          <Route path='/playlists/:id' element={<GetPlaylistById />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
