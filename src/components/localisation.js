import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



function GeoLocalisation({ selection }) {

  return  selection !== "Geolocalistion" || (
      <MapContainer center={[48.80505961963306, 2.4773381473647036]} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.80505961963306, 2.4773381473647036]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    
  );

}

export default GeoLocalisation;
