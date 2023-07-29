const VideoReducer = ()=>{
    const initialState={
        watchLater: [],
        playlists: (() =>
           JSON.parse(localStorage.getItem("playlist-data")) || [])(),
    }
 

    const videoReducer = (state,action) =>{
        
    switch(action.type){
      
           
        default:
            return null;
    }
    }
    return {initialState, videoReducer}
}

export default VideoReducer;