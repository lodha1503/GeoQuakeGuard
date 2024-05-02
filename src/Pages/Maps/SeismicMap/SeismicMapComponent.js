import React, { useEffect, useState } from 'react';
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import TextSymbol from '@arcgis/core/symbols/TextSymbol';
import Color from '@arcgis/core/Color';
import Graphic from '@arcgis/core/Graphic';


import { search } from './SeismicSearchService'; // Import the search function
import { API_KEY } from '../../config';

import './SeismicMapComponent.css'; // Import CSS file

const SeismicMapComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [view, setView] = useState(null);
  const [featureLayer, setFeatureLayer] = useState(null);
  const [graphicsLayer, setGraphicsLayer] = useState(null);
  const [searchSuggestions, setSearchSuggestions] = useState([]); // State for search suggestions


  // The cleanup function returned from the useEffect hook is not called initially when the component is first rendered. It's only called when the component is about to be unmounted from the DOM.
  
  // When the component is first rendered, React executes the code inside the useEffect hook (the effect function), and then it returns the cleanup function. However, the cleanup function itself is not invoked at this stage. Instead, React stores it internally to be executed later when the component is unmounted.
  useEffect(() => {
    esriConfig.apiKey = API_KEY;
    const map = new Map({
      basemap: 'topo',
    });

    const newFeatureLayer = new FeatureLayer({
      url: 'https://livingatlas.esri.in/server/rest/services/Seismic_Zones/MapServer/0',
    });

   
  

    map.add(newFeatureLayer);
    
    const mapView = new MapView({
      container: 'map-container',
      map: map,
      center: [81.2090, 22],
      zoom: 5,
      ui: {
        components: [] // Remove all default UI components
      }
    });
    mapView.ui.remove('attribution');

    setFeatureLayer(newFeatureLayer);
    setView(mapView);
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    setGraphicsLayer(graphicsLayer);

    return () => {
      mapView.destroy();
    };
  }, []);

  const handleSearch = async () => {
    try {
      const result = await search(searchText, view, setSearchResults, graphicsLayer, featureLayer);

      if (result) {
        view.center = [result.longitude, result.latitude];
        view.zoom = 8; 
        const labelPoint = {
          type: 'point',
          x: result.longitude, // Adjust as needed
          y: result.latitude+0.2, // Adjust as needed
        };

        // Define text symbol properties
        const textSymbol = new TextSymbol({
          color: new Color([0, 0, 0]), // Text color
          text: `${result.seismic_zone}\n(${result.intensity})`, // Text content
          haloColor: new Color([255, 255, 255]), // Halo color
          haloSize: '20px', // Halo size
          font: { // Font properties
            size: 15, // Text size
            family: 'Arial', // Font family
            weight: 'bold', // Font weight
          },
        });

        // Create a graphic for the label using the text symbol and point geometry
        const labelGraphic = new Graphic({
          geometry: labelPoint,
          symbol: textSymbol,
        });

        // Add the label graphic to the graphics layer
        graphicsLayer.add(labelGraphic);
        console.log(result.seismic_zone);
      
      } else {
        console.error('Please enter a place inside India');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // // Function to fetch search suggestions
  // const fetchSearchSuggestions = async (query) => {
  //   try {

  //     const apiKey = 'YOUR_GOOGLE_API_KEY'; //Paid 
  //     const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}`);
      
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch suggestions');
  //     }
  
  //     const data = await response.json();
  //     const suggestions = data.predictions.map(item => item.description);
  
  //     setSearchSuggestions(suggestions);
  //   } catch (error) {
  //     console.error('Error fetching suggestions:', error);
  //   }
  // };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div id="map-container" style={{ height: '100vh', width: '100%' }}>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // fetchSearchSuggestions(e.target.value); // Fetch search suggestions as the user types
          }}
          onKeyDown={handleKeyDown} // Call handleSearch when Enter key is pressed

          placeholder="Enter a location in India"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {/* Display search suggestions */}
      <ul className="suggestion-list">
        {searchSuggestions.map((suggestion, index) => (
          <li key={index} className="suggestion-item">
            {suggestion}
          </li>
        ))}
      </ul>
      {/* Map will be rendered here */}
    </div>
  );
};

export default SeismicMapComponent;
