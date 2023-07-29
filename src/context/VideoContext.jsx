import { createContext, useContext, useState } from "react";
import {categories} from "../data/categories.js"
import { videos } from "../data/videos.js";


export const VideoContext = createContext(null);

export const VideoProvider =({children}) =>{
 const [categoriesData, setCategoriesData] = useState(categories);
 const [videosData, setVideosData]= useState(videos)



return(
    <VideoContext.Provider value={{
        categoriesData,
        videosData
    }}>
        {children}
    </VideoContext.Provider>
)
}

export const useVideoContext = ()=> useContext(VideoContext);