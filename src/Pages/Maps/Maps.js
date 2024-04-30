import React from 'react';
import { NavLink } from 'react-router-dom';
import './Maps.css';

function Maps() {
  return (
      <div className="Maps-main">
        <NavLink to="/seismic_maps" className="map1">
          <div className="seismic-zone">
            <div className="map-photo">
            </div>
            <div className="map-description">
              <div className="heading">
                Seismic Zones Of India
              </div>
              <div className="sub-heading">
                **As per 2023
              </div >
              <div className="map-text">

                The seismic zone layer sourced from <a href="https://data.gov.in/resource/shape-file-seismic-zones">https://data.gov.in/resource/shape-file-seismic-zones</a> contains valuable attributes, including seismic zone and intensity zone information. These attributes provide crucial insights into the geographical distribution of seismic activity and the corresponding intensity levels across different regions of India</div>

            </div>
          </div>
        </NavLink>

        {/* <NavLink to="/wind_maps" className="map2">
              <div className="wind-zone">

                </div>
                <div className="map-description">
                    <div className="heading">
                        Wind Zones Of India
                    </div>
                    <div className="sub-heading">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="map-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptatem soluta repellendus at maiores quia minus a ad animi sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda quasi suscipit neque consectetur rem consequuntur excepturi sed quisquam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid.
                    </div>
                        
                </div>
              </div>  
          </NavLink>

          
         */}


      </div>
  )
}

export default Maps
