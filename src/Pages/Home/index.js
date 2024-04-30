import React from "react";

import './index.css';
import HomeLeft from '../../components/Home/Home_Left/HomeLeft';
import HomeRight from '../../components/Home/Home_Right/HomeRight';
import HomeOptions from '../../components/Home/Home_Options/HomeOptions';

function Home() {
  return (
    <div className='home'>
      <HomeLeft></HomeLeft>
      <div className="main">
        <HomeRight></HomeRight>
        <HomeOptions></HomeOptions>
      </div>
    </div>

  );
}

export default Home
