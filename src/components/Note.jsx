import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'

const Note = ({note}) => {
    console.log(note)
  return (
    <div className="note__sec">
        <p>{note}</p>
        <div>
            <ul className="note__sec" >
                <li><MdModeEdit/></li>
                <li><AiTwotoneDelete /></li>
            </ul>
        </div>
    </div>
  )
}

export default Note