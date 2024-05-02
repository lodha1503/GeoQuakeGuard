import React from 'react';
import './HomeRight.css';
import homeright from '../../../constants/Home/homeright.json'

function HomeRight() {
  return (
    <div className="home-right">
            <h1 className="first-heading">
                {homeright.first}
            </h1>
            <h3 className="second">
                {homeright.second}
            </h3>
            <p className="third">
              {homeright.third}
            </p>
    </div>
  )
}




export default HomeRight;
