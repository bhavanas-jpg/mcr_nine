import React from 'react'
import { useVideoContext } from '../context/VideoContext';
import Note from './Note';

const Notes = () => {
    const {state:{notes}} = useVideoContext();
  return (
    <div>
        {
     notes.map(note =>

        <Note note={note}/>
        )
        }
    </div>
  )
}

export default Notes