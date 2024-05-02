import Query from '@arcgis/core/rest/support/Query';
import Graphic from '@arcgis/core/Graphic';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import { API_KEY } from '../../config';

export const search = async (searchText, view, setSearchResults, graphicsLayer, featureLayer) => {
  try {
    const response = await fetch(
      `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${searchText}&outFields=Match_addr,Addr_type&maxLocations=10&apiKey=${API_KEY}`
    );


    if (response.ok) {
      
      const data = await response.json();
      
      setSearchResults(data.candidates);
      const candidates = data.candidates;
   
      if (candidates.length > 0) {
        
        const location = candidates[0].location;
        
        let seismicZoneValue,intensityZoneValue;

        if (view) {
          
          view.center = [location.x, location.y];
          
          view.zoom = 3;

          const fillSymbol = new SimpleFillSymbol({
            color: [255, 0, 0, 0.2],
            outline: {
              color: [0, 0, 0],
              width: 2,
            },
          });

          const polygonGeometry = {
            type: 'polygon',
            rings: [
              [
                [location.x - 0.1, location.y - 0.1],
                [location.x + 0.1, location.y - 0.1],
                [location.x + 0.1, location.y + 0.1],
                [location.x - 0.1, location.y + 0.1],
              ],
            ],
          };

          const polygonGraphic = new Graphic({
            geometry: polygonGeometry,
            symbol: fillSymbol,
          });

          graphicsLayer.removeAll();
          graphicsLayer.add(polygonGraphic);

          const query = new Query();
          query.geometry = polygonGeometry;
          
          query.outFields = ['seismiczone','intensityzone'];
          

          const result = await featureLayer.queryFeatures(query).catch((error) => {
            console.error('Error querying features:', error);
            return null; // Return null in case of an error
          });   
               
          const fields = featureLayer.fields;
        
          const seismicZoneField = fields.find((field) => field.name === 'seismiczone');
          const intensityZone = fields.find((field) => field.name === 'intensityzone');

          if (seismicZoneField && intensityZone) {
            result.features.forEach((feature) => {
              seismicZoneValue = feature.attributes['seismiczone'];
              intensityZoneValue= feature.attributes['intensityzone'];
            });

            const ZONE_DETAIL = {
              latitude: location.y,
              longitude: location.x,
              seismic_zone: seismicZoneValue,
              intensity: intensityZoneValue,
            };
      
            return ZONE_DETAIL;

          } else {
            console.error('Field not found: seismiczone');
          }
        }
      }
    } else {
      console.error('Error during geocoding:', response.statusText);
    }

    // Return null if no data is found or an error occurred
    return null;
  } catch (error) {
    console.error('Error during geocoding:', error);
    // Return null in case of an error
    return null;
  }
};
