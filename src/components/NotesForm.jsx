import React, { useState } from 'react';
import { useVideoContext } from '../context/VideoContext';


const NotesForm = () => {
    const [notesText, setNotesText] = useState("");
const {dispatch, state} = useVideoContext();

const handleNotesForm =()=>{
  dispatch ({
    type: "ADD_TO_NOTES",
    payload: notesText
  })
  setNotesText("");
}
  return (
    <div>
        <input 
        className="playlist__input"
        type="text" placeholder="New Notes"
        value={notesText}
        onChange={(e)=>setNotesText(e.target.value)}
        />
        <button 
        className="btn btn-primary"
        onClick={handleNotesForm}
        >Add New Note</button>
    </div>
  )
}

export default NotesForm;
