import { createContext, useContext, useEffect, useReducer, useState } from "react";
import {categories} from "../data/categories.js"
import { videos } from "../data/videos.js";
import VideoReducer from "../reducer/VideoReducer.js";


export const VideoContext = createContext(null);

export const VideoProvider =({children}) =>{
 const [categoriesData, setCategoriesData] = useState(categories);
 const [videosData, setVideosData]= useState(JSON.parse(localStorage.getItem("videosData")) || videos);
 const {initialState, videoReducer} = VideoReducer();
 const [state, dispatch] = useReducer(videoReducer,initialState )

const handleWatchLater=(id)=>{
const updatedVideos = videosData.map(video => video._id === id ? {...video, watchLater: video?.watchLater ? false : true} : video);
setVideosData(updatedVideos)
}

useEffect(()=>{
    localStorage.setItem("videosData", JSON.stringify(videosData));
}, [videosData])

// useEffect(()=>{
//     localStorage.setItem("playlist-data", JSON.stringify(state.playlists));
// }, [state.playlists])



return(
    <VideoContext.Provider value={{
        categoriesData,
        videosData,
        state, 
        dispatch,
        handleWatchLater
    }}>
        {children}
    </VideoContext.Provider>
)
}

export const useVideoContext = ()=> useContext(VideoContext);