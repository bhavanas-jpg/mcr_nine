import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import PlaylistForm from '../components/PlaylistForm'
import {useVideoContext} from "../context/VideoContext.jsx"

const Playlist = () => {
  const {state} = useVideoContext();
  const [showPlaylist, setShowPlaylist] = useState(false)


  return (
    <main className="container">
    <div className="content">
      <aside className="sidebar__sec">
        <Navbar />
      </aside>
      <section className="main__sec">
    <div>
      <h3>Playlist</h3>
      <div className="playlist">
      {state.playlists.map(title => 
      <div className="playlist__content">
          <p>{title}</p>
      </div>
      
        )}
      </div>
      <button 
      onClick={()=>setShowPlaylist(prev=>!prev)}
      className="btn btn-primary"
      >+</button>
      {showPlaylist && <PlaylistForm />}
      
    </div>
    </section>
      </div>
    </main>
  )
}

export default Playlist