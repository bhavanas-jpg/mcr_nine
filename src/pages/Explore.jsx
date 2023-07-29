import React from "react";
import Navbar from "../components/Navbar";

const Explore = () => {
  return (
    <main className="container">
      <div className="content">
        <aside className="sidebar__sec">
          <Navbar />
        </aside>
        <section className="main__sec">
          <div>Explore</div>
        </section>
      </div>
    </main>
  );
};

export default Explore;
