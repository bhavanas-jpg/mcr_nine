import React from "react";
import Navbar from "../components/Navbar";
import { useVideoContext } from "../context/VideoContext";
import { MdOutlineWatchLater } from "react-icons/md";
import VideoCard from "../components/VideoCard";

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
          <VideoCard  videosData ={ videosData}/>
        </section>
      </div>
    </main>
  );
};

export default Explore;
