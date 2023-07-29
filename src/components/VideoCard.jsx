import React from 'react'
import { useVideoContext } from '../context/VideoContext';
import { MdOutlineWatchLater } from 'react-icons/md';


const VideoCard = ({ videosData}) => {
    console.log(videosData);
    
  return (
    <div className="card">
    {
     videosData.map(video=>(
      <div className="card__content"> 
        <span className="watchlater__icon">
          <MdOutlineWatchLater />
        </span>
        <img src={video.thumbnail} alt=""
        width="100%" height="auto"
        />
        <h5>{video.title}</h5>
        <h5>{video.category }</h5>
        <span
        className="card__text"
        >{video.views} Views | {video.creator}</span>
      </div>
     ))
    }
    </div>
  )
}

export default VideoCard