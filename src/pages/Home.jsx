import React from 'react'
import { Link } from 'react-router-dom';
import BannerImg from '../assets/pizza.jpeg'
import '../styles/Home.css'
const Home = () => {
  return (
    <>
      <div className="home" style={{backgroundImage: `url(${BannerImg})`}}>
        <div className="headerContainer">
          <h1>Bordeaux Pizzeria</h1>
          <p>PiZZA FOR EVERYONE</p>
          <Link to="/menu">
          <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home