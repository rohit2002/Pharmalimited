import React, { useState } from 'react'
import { Link } from "react-router-dom";

 
import "./Navbar.css"
const Navbar = () => {
    const [aboutUsDrop,setAboutUsDrop]=useState(false);
    const [productDrop,setProductDrop]=useState(false);
    const [mediaDrop,setMediaDrop]=useState(false);
    const [careersDrop,setCareersDrop]=useState(false);
    const [contactDrop,setContactDrop]=useState(false);
  return (
    <div className='nav-container'>
     
     <div className='logo'>
        <img src="/images/pharmed-logo.svg" alt="logo" />
     </div>

     <div className='nav-content'>
        <ul className='list-content'>
            <li className='ibhi'><Link to="/">Home</Link></li>
            <li>
            <button
            className= "nav-btn"
            onClick={() => setAboutUsDrop(!aboutUsDrop)}
          >
            <div className='about-text'>About Us ▼</div>
          </button>

          {aboutUsDrop && (
            <ul className="about-drop">   
            
             <li className="option-1"> <Link to="/Company Overview">Company Overview</Link> </li>
              <li className="option-1">  <Link to="/Card">Our Team</Link> </li>
              <li className="option-1">Our Values</li>
               
            </ul>
          )}
            </li>
            <li>
            <button
            className= "nav-btn"
            onClick={() => setProductDrop(!productDrop)}
          >
            <div className='about-text'>Products ▼</div>
          </button>


          {productDrop && (
            <ul className="about-drop product">
            
              <li className="option-1">  <Link to="/Products">ALL Products</Link></li>
              <li className="option-1">Joint,Bone & Tendon Health</li>
              <li className="option-1">Women's Health</li>
              <li className="option-1">Pain Management</li>
              <li className="option-1">General Health</li>
              <li className="option-1">Immune Health</li>
              <li className="option-1">Cardiodiabetic Health</li>
              <li className="option-1">Ear,Nose And Throat Health</li>
              <li className="option-1">Reproductive Health</li>
              
              
            </ul>
          )}
            </li>

            <li>
            <button
             className= "nav-btn"
            onClick={() => setMediaDrop(!mediaDrop)}
          >
           <div className='about-text'>Media ▼</div> 
          </button>
              
          {mediaDrop && (
            <ul className="about-drop media">
              <li className="px-4 py-2 hover:bg-gray-100">Awards</li>
              <li className="px-4 py-2 hover:bg-gray-100">Press Releases</li>
              <li className="px-4 py-2 hover:bg-gray-100">Events</li>
              <li className="px-4 py-2 hover:bg-gray-100">Resources</li>
            </ul>
          )}

            </li>
            <li>

           <button option-1option-1
             className= "nav-btn"
            onClick={() => setCareersDrop(!careersDrop)}
          >
            <div className='about-text'>Careers ▼</div>
          </button> 

          {careersDrop && (
            <ul className="about-drop career">
              <li className=" option-1">Life At Pharmed</li>
             
              <li className=" option-1"> <Link to="/Careers">Careers</Link></li>
            </ul>
          )}
            </li>
            <li>
            <button
            className= "nav-btn"
            onClick={() => setContactDrop(!contactDrop)}
          >
            <div className='about-text'>Contact Us ▼</div>
          </button> 
          { contactDrop && (
            <ul className="about-drop contact">
              <li className="option-1">FFR Reporting</li>
              <li className="option-1">Pharmacovigilance</li>
              <li className="option-1">Contact Us</li>
            </ul>
          )}
            </li>
            <li className='ibhi'>IBHI</li>
        </ul>
   </div>

       
             
    </div>
  )
}

export default Navbar
