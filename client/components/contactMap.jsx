import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const ContactMap = () => {
  return (
    <MapContainer
      center={[48.2082, 16.3738]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-80 w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={[48.2082, 16.3738]}
        icon={
          new Icon({
            iconUrl: "./../directions/d0.png",
            iconSize: [24, 24],
          })
        }
      />
    </MapContainer>
  );
};
export default ContactMap;
