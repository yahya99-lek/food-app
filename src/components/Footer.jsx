import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import  "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="socialmedia">
            <InstagramIcon /><FacebookIcon /><LinkedInIcon /><TwitterIcon />
            <p>&copy 2023 yahyalek.com</p>
        </div> 
      </div>
    </>
  )
}

export default Footer