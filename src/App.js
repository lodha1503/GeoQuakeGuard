import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Opportunities from './Pages/Opportunities/Opportunities';
import Publications from './Pages/Publications/Publications';
import ResearchWork from './Pages/ResearchWork/ResearchWork';
import Maps from './Pages/Maps/Maps';
import SeismicMaps from './Pages/Maps/SeismicMap/SeismicMaps';
import WindMaps from './Pages/Maps/WindMap/WindMaps';



export default function App(){
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<div><Home /></div>}/>
          <Route path="/courses" element={<Courses/>} />
          <Route path="/opportunities" element={<Opportunities/>}/>
          <Route path="/publications" element={<Publications/>}/>
          <Route path="/rnw" element={<ResearchWork/>}/>
          <Route path="/Maps" element={<Maps/>}/>
          <Route path="/seismic_maps" element={<SeismicMaps/>}/>
          <Route path="/wind_maps" element={<WindMaps/>}/>
       
        </Routes>
      </Router>
    </div>
  );
}
