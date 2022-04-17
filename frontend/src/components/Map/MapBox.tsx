import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import datas from './data_waste.json';

interface MapInterface {
  height: string,
  width: string
}

function MapBox(props: MapInterface) {
  const {width, height} = props;
  return (
    <div>
      <MapContainer
        center={[-0.789275, 113.921326]}
        zoom={4}
        scrollWheelZoom={true}
        style={{ width: width, height: height, margin: '5% auto' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {datas.map((data) => (
          <Marker
            key={data.id}
            position={[data.gps.latitude, data.gps.longitude]}
          >
            <Popup position={[data.gps.latitude, data.gps.longitude]}>
              <div>
                <h4>{`${data.name}`}</h4>
                <h6>{`Address: ${data.address}`}</h6>
                <h6>{`Telp: ${data.telp}`}</h6>
                <h6>{`Open: ${data.open_status}`}</h6>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapBox;
