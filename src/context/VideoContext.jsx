import { createContext, useContext, useState } from "react";


export const VideoContext = createContext(null);

export const VideoProvider =({children}) =>{
 const [categories, setCategories] = useState();

 const name="Bhavana"







return(
    <VideoContext.Provider value={{
        name
    }}>
        {children}
    </VideoContext.Provider>
)
}

export const useVideos = ()=> useContext(VideoContext);