import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg"
import "../styles/About.css"
const About = () => {
  return (
    <>
      <div className="about">
        <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium obcaecati corrupti adipisci architecto cupiditate reprehenderit quaerat necessitatibus minima repellendus vel at fugit ad expedita consequatur, in ea enim quo delectus.</p>
        </div>
      </div>
    </>
  )
}

export default About