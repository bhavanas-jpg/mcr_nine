import React from 'react'
import { useVideos } from '../context/VideoContext.jsx'

const Home = () => {
  const{name} = useVideos();
  return (
    <div className="container">
      <p>Home</p>
      <p>{name}</p>
      
      </div>
  )
}

export default Home