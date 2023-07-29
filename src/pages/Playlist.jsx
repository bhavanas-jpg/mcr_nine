import React from 'react'
import Navbar from '../components/Navbar'

const Playlist = () => {
  return (
    <main className="container">
    <div className="content">
      <aside className="sidebar__sec">
        <Navbar />
      </aside>
      <section className="main__sec">
    <div>Playlist</div>
    </section>
      </div>
    </main>
  )
}

export default Playlist