import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const AirportMap = ({ airport }) => {
  const [latitude, setLatitude] = useState(-26);
  const [longitude, setLongitude] = useState(28);
  // convert lat and lon to numbers

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search?q=${airport.airport}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatitude(data[0].lat);
        setLongitude(data[0].lon);
      });
  }, []);

  var iconSize = 0;
  if (latitude != 0 && longitude != 0) {
    iconSize = 24;
  }

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-80 w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={[latitude, longitude]}
        icon={
          new Icon({
            iconUrl: "./../directions/d0.png",
            iconSize: [iconSize, iconSize],
          })
        }
      >
        <Popup>{airport.airport}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default AirportMap;
