import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard';
import { useVideoContext } from '../context/VideoContext';

const VideoListing = () => {
    const {category} = useParams();
    const {videosData} = useVideoContext();

    const categoryVideos = videosData.filter(video => video.category === category)

  return (
    <main className="container">
      <div className="content">
        <aside className="sidebar__sec">
          <Navbar />
        </aside>

        <section className="main__sec">
        <div>
            <h3>{category}</h3>
            <VideoCard  videosData={categoryVideos}/>
        </div>
        </section>

    </div>
    </main>
  )
}

export default VideoListing