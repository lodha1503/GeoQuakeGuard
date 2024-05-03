import React from 'react'
import './HomeLeft.css';
import AKR from '../../../assets/Images/Amit_Kumar_Rathi.jpg'

function HomeLeft() {
  return (
    <div>
      <div className='home-left'>
        <img src={AKR} alt="" className="home-left-ak" />
      </div>
    </div>
  )
}

export default HomeLeft;
