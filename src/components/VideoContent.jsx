import React from 'react'
import { MdOutlineWatchLater, MdWatchLater } from 'react-icons/md';
import { useVideoContext } from '../context/VideoContext';
const VideoContent = ({video} ) => {
    const{state, dispatch, handleWatchLater} = useVideoContext();

  return (
    <div className="card__content"> 
        <span
      
        className="watchlater__icon">
          {video?.watchLater ?  <MdWatchLater
          onClick={()=> handleWatchLater(video._id)}

          /> :
          <MdOutlineWatchLater
          onClick={()=>handleWatchLater(video._id)}
        />
          }
        
         
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
  )
}

export default VideoContent