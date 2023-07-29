import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useVideoContext } from "../context/VideoContext";
import Navbar from "../components/Navbar";
import { MdEditNote, MdOutlineWatchLater, MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import Notes from "../components/Notes";
import NotesForm from "../components/NotesForm";

const SingleVideo = () => {
  const { videoId } = useParams();
  const { videosData,handleWatchLater } = useVideoContext();
  const [showNoteModal, setShowNoteModal] = useState(false);

  const video = videosData.find((video) => video?._id === Number(videoId));

  return (
    <main className="container">
      <div className="content">
        <aside className="sidebar__sec">
          <Navbar />
        </aside>
        <section className="main__sec">
          <div >
            <video width="70%" height="540" controls>
              <source src={video?.src} type="video/mp4" />
            </video>
            <div className="video__content">
              <h4>{video?.title}</h4>
              <div>
                <ul className="video__list--icons">
                    <li>
                    <span >
        {video?.watchLater ? (
          <MdWatchLater onClick={() => handleWatchLater(video._id)} />
        ) : (
          <MdOutlineWatchLater onClick={() => handleWatchLater(video._id)} />
        )}
      </span>   
                    </li>
                    <li>
                    <MdPlaylistAdd />
                    </li>
                    <li 
                    >
                      <MdEditNote 
                      onClick={()=>setShowNoteModal(prev=> !prev)}
                      />
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
         {showNoteModal && <NotesForm />}
          <h3>Notes</h3>
            <Notes />
          </div>
          
        </section>
      </div>
    </main>
  );
};

export default SingleVideo;
