import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Playlist from "./pages/Playlist";
import Explore from "./pages/Explore";
import WatchLater from "./pages/WatchLater";
import VideoListing from "./pages/VideoListing";
import SingleVideo from "./pages/SingleVideo";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/playlists" element={<Playlist />}/>  
        <Route path="/watchlater" element={<WatchLater />}/>
        <Route path="/videoListing/:category" element={<VideoListing />}/>
        <Route path="/:videoId" element={<SingleVideo />}/>
      </Routes>
    </>
  );
}

export default App;
