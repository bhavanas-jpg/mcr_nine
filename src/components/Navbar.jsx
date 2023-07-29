import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdPlaylistAdd, MdWatchLater } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <ul className="sidebar__list">
        <li>
          <NavLink to="/" 
          className="menu-title">
            <span className="mr-1">
              <AiFillHome />
            </span>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
          className="menu-title"
          to="/explore">
            <span className="mr-1">
              {" "}
              <MdExplore />
            </span>
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink
          className="menu-title" 
          to="/playlists">
            <span className="mr-1">
              {" "}
              <MdPlaylistAdd />
            </span>
            Playlists
          </NavLink>
        </li>
        <li>
          <NavLink 
          className="menu-title"
          to="/watchlater">
            <span className="mr-1">
              {" "}
              <MdWatchLater />
            </span>
            Watch Later
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
