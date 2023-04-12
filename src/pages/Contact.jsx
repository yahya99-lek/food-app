import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg"
import "../styles/Contact.css"
const Contact = () => {
  return (
    <>
       <div className="contact">
        <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})`}}>lkwvw</div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="fullName" placeholder="Enter full name..." />
                <label htmlFor="email">email</label>
                <input type="email" name="email" placeholder="Enter your email..." />
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder='Enter message...' rows="6" required></textarea>
                <button type="submit">Send Message</button>
            </form>

        </div>
       </div> 
    </>
  )
}

export default Contact