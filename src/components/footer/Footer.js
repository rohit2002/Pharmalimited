import React from 'react'
import QuickContact from './QuickContact'
 import "./Footer.css"

const Footer = () => {
    const list=[ 
        "FFR Reporting",
        "Products",
        "Careers",
        "CSR",
        "IEPF2",
        "Annual Return",
        "Caf2024",
        "Contact Us"]
  return (
    <div>
       <div className='footer-content'>
      <div className='logo-img'>
      <img src="/images/pharmed-logo.svg" alt="logo" />
      </div>
<div className='list-item'>

  <p className='quick-link'>Quick Links</p>
      <div className='list'>
        {
            list.map((val)=>{
                return(
                  
                    <li className='list2'>{val}</li>
                )
        })
        }
      </div>
      </div>
       
       <div className='Quick-contact'>
       <QuickContact/>
       </div>
     
      
    </div>
    </div>
  )
}

export default Footer
