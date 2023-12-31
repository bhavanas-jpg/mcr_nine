import React from 'react'
import { useVideoContext } from '../context/VideoContext';

import VideoContent from './VideoContent';


const VideoCard = ({ videosData}) => {
    console.log(videosData);
    
  return (
    <div className="card">
    {
     videosData.map(video=>(
     <VideoContent
     key={video?.title}
     video={video} />
     ))
    }
    </div>
  )
}

export default VideoCard