import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import { useVideoContext } from '../context/VideoContext'

const Note = ({note}) => {
   const {dispatch} = useVideoContext();
  return (
    <div className="note__sec">
        <p>{note.noteData}</p>
        <div>
            <ul className="note__sec" >
                <li><MdModeEdit/></li>
                <li
                onClick={()=>dispatch(
                 {
                    type:"DELETE_NOTE",
                    payload: note.id
                }
                )}
                ><AiTwotoneDelete /></li>
            </ul>
        </div>
    </div>
  )
}

export default Note