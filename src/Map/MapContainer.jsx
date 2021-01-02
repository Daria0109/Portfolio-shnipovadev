import React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";


const mapState = {
  center: [53.902284, 27.561831],
  zoom: 10,
};


const MapContainer = () => {
  return <YMaps query={{ lang: "en_US"}}>
    <Map width='100%'
         height='100%'
         defaultState={mapState} >
    <Placemark geometry={mapState.center} options={{preset: 'islands#redDotIcon'}} />
    </Map>
  </YMaps>
}

export default MapContainer;