import { useRef, useEffect } from 'react';
import L, { LatLngExpression, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../../../assets/images/map marker.png';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const latitude = 31.0500;
    const longitude = 31.3833;
    const placeCoordinates: LatLngExpression = [latitude, longitude];
    const map = L.map(mapRef.current!).setView(placeCoordinates, 13);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const customIcon = new Icon({
      iconUrl: markerIcon,
      iconSize: [32, 32]
    });


    L.marker(placeCoordinates, { icon: customIcon }).addTo(map);


    return () => {
      map.remove();
    };
  }, []);

  return <div
    ref={mapRef}
    className=" z-[1] md:w-full lg:w-full sm:w-full w-full rounded-2xl h-[400px] md:h-[600px]  lg:h-[590px]  "

  />

    ;


};

export default Map;
