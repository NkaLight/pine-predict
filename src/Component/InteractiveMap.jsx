import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Mapbox token from .env
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const InteractiveMap = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  console.log("InterativeMap")

  useEffect(() => {
    if (mapRef.current) return; // only initialize once

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [174.7633, -36.8485], // Auckland, NZ
      zoom: 6,
    });

    // optional: add navigation controls
    mapRef.current.addControl(new mapboxgl.NavigationControl());

    return () => mapRef.current?.remove();
  }, []);

  return <div ref={mapContainerRef} style={{ width: "100%", height: "80vh" }} />;
};

export default InteractiveMap;
