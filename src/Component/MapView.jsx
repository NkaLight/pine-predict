import React from "react";
import Map from "./InteractiveMap";
import saplingData from "../data/Wilding_Conifer_Survey_Areas_1998-2003.geojson"; // your AI-predicted areas


const MapView = () => {
  return (
    <div style={{ height: "100vh", width: "100%"}}>
      <h1>Pine Tree Sapling Predictions</h1>
      <Map geojsonData={saplingData}/>
    </div>
  );
};

export default MapView;