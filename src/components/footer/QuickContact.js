 import React from 'react'
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
 import SocialMediaIcons from './SocialMediaIcons';
 import "./QuickContact.css"
 const QuickContact = () => {
   return (
     <div className='contact-container'>
      <div className='contact-wrapper' >
       <h4 className='quick-heading'>Quick Contact</h4>

 
<p className='contact-para1'>If you have any questions or need help, <br />feel free to contact with our team.</p>
 
      
         <span className='contact-number'><a href="abc" className='anchor-cont'>
         <FontAwesomeIcon icon={faPhone}  className='phone-icon'/>
         +91-8069278000</a></span>
        <p className='contact-para2'> Sattva Mind Comp Tech Park, Ground  <br /> Floor, Office 1, 149-A, EPIP II Phase, Whitefield Industrial Area, Bengaluru –   <br />560 066, India.
         </p>

       <div className='direction-contact'>
        <p className='contact-direction'> &rarr; Get Directions</p>
        <div className='social-icon1'> 
        <SocialMediaIcons/>
        </div>
       
       </div>
       </div>
     </div>
   )
 }
 
 export default QuickContact
 