import React from 'react'
import Careertab1 from './Careertab1'
import Careertab2 from './Careertab2'
import "./Maincareertab.css"

const Maincareertab = () => {
  return (
    <div>

        <div className='career-container'>
            <div className='work-culture'>
            <Careertab2/>
            </div>
       <div className='form-container'>
       <Careertab1/>
       </div>
       
        </div>
     
   
    </div>
  )
}

export default Maincareertab
