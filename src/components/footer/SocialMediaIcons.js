import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./SocialMediaIcons.css"


const SocialMediaIcons = () => {
  return (
    <div className='social-container'>
       
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
               <FaFacebook   className='social' />
             </a>
                    
                       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
               <FaInstagram className='social' />
             </a>
                      
                       <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
               <FaLinkedin  className='social'/>
             </a>
                       
      
    </div>
  )
}

export default SocialMediaIcons
