import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useVideoContext } from '../context/VideoContext'
import VideoCard from '../components/VideoCard'

const WatchLater = () => {
  const {videosData} = useVideoContext();
 const watchLater= videosData.filter(video=> video?.watchLater)




  return (
    <main className="container">
    <div className="content">
      <aside className="sidebar__sec">
        <Navbar />
      </aside>
      <section className="main__sec">
    <div>
      <h3>WatchLater</h3>
      <VideoCard videosData={watchLater}/>
      </div>
    </section>
      </div>
    </main>
  )
}

export default WatchLater