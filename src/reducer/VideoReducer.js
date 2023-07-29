
import { v4 as uuid } from 'uuid'

const VideoReducer = ()=>{
    const initialState={
        watchLater: [],
        playlists:[],
        notes: []
    }
 // (() =>JSON.parse(localStorage.getItem("playlist-data")) || [])(),

    const videoReducer = (state,action) =>{
        
    switch(action.type){
      
           case "ADD_TO_PLAYLIST":
            return {
                ...state,
                playlists: [action.payload, ...state.playlists]
            }
        case "ADD_TO_NOTES":
            const noteItem ={
                id: uuid(),
                noteData: action.payload
            }
            return {
                ...state,
                notes: [noteItem, ...state.notes]
            }
        case "DELETE_NOTE":
            const updatedNote = state.notes.filter(note => note?.id !== action.payload)
            return{
          ...state,
          notes: updatedNote 
            }
        default:
            return null;
    }
    }
    return {initialState, videoReducer}
}

export default VideoReducer;