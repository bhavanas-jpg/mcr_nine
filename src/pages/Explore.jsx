import React from "react";
import Navbar from "../components/Navbar";
import { useVideoContext } from "../context/VideoContext";
import { MdOutlineWatchLater } from "react-icons/md";

const Explore = () => {
  const { videosData} = useVideoContext();

  console.log(videosData);
  return (
    <main className="container">
      <div className="content">
        <aside className="sidebar__sec">
          <Navbar />
        </aside>
        <section className="main__sec">
          <h3>Explore</h3>
          <div>
            <input 
            className="search__input"
            type="search" 
            placeholder="search by title"
            />
          </div>
          <div className="card">
          {
           videosData.map(video=>(
            <div className="card__content"> 
              <span className="watchlater__icon">
                <MdOutlineWatchLater />
              </span>
              <img src={video.thumbnail} alt=""
              width="100%" height="auto"
              />
              <h5>{video.title}</h5>
              <h5>{video.category }</h5>
              <span
              className="card__text"
              >{video.views} Views | {video.creator}</span>
            </div>
           ))
          }
          </div>
        </section>
      </div>
    </main>
  );
};

export default Explore;
