import React from "react";
import { useVideoContext } from "../../context/VideoContext.jsx";
import Navbar from "../../components/Navbar.jsx";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { categoriesData} = useVideoContext();
  const navigate = useNavigate();


  return (
    <main className="container">
      <div className="content">
        <aside className="sidebar__sec">
          <Navbar />
        </aside>

        <section className="main__sec">
          <div className="card">
            {categoriesData.map(category =>(
              <div className="card__content"
              onClick={()=>navigate(`/videoListing/${category.category}`)}>
              <img src={category.thumbnail} alt=""
              width="100%" height="auto"
              />
              <p>{category.category }</p>
              </div>
            ))}
            
          
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
