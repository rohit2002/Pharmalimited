import React from 'react'
import OurMission from './OurMission'
import OurValues from './OurValues'
import OurVision from './OurVision'
import "./Ours.css"

const Ours = () => {
  return (
    <div>
      <div className='our-container'>
        <OurValues/>
        <OurMission/>
        <OurVision/>
      </div>
    </div>
  )
}

export default Ours
