import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useVideoContext } from "../context/VideoContext";
import { MdOutlineWatchLater } from "react-icons/md";
import VideoCard from "../components/VideoCard";

const Explore = () => {
  const { videosData} = useVideoContext();
  const [searchQuery, setSearchQuery] = useState("");

  const exploreVideosData =searchQuery.length ? videosData.filter(video => 
    video.title.toLowerCase().includes(searchQuery)
    ) :videosData

  

  console.log(searchQuery ,"searched");
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
           
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
          </div>

          <VideoCard  videosData ={exploreVideosData}/>
        </section>
      </div>
    </main>
  );
};

export default Explore;
