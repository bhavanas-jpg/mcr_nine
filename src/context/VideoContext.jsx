import { createContext, useContext, useState } from "react";
import {categories} from "../data/categories.js"


export const VideoContext = createContext(null);

export const VideoProvider =({children}) =>{
 const [categoriesData, setCategoriesData] = useState(categories);



return(
    <VideoContext.Provider value={{
        categoriesData
    }}>
        {children}
    </VideoContext.Provider>
)
}

export const useVideoContext = ()=> useContext(VideoContext);