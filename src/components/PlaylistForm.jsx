import React, { useState } from 'react'
import { useVideoContext } from '../context/VideoContext.jsx';

const PlaylistForm = () => {
  const [playlistTitle, setPlaylistTitle] = useState("");
  const {dispatch, state} = useVideoContext();

  const handlePlaylistForm =()=>{
    dispatch ({
      type: "ADD_TO_PLAYLIST",
      payload: playlistTitle
    })
    setPlaylistTitle("");
  }
  
  return (
    <div>
        <h4>Add to playlist</h4>
        <input 
        className="playlist__input"
        type="text"  placeholder="new playlist"
        value={playlistTitle}
        onChange={(e)=>setPlaylistTitle(e.target.value)}
        /><br/>
        <button
        onClick={handlePlaylistForm}
        className="btn btn-primary"
        >Create new playlist</button>
    </div>
  )
}

export default PlaylistForm;