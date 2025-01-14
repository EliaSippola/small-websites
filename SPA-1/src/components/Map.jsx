import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
export default function Map() {

    const pos = [62.601, 29.7634];

    return (
        <MapContainer center={pos} zoom={13} style={{height: '500px', width: '100%'}}>
            <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={pos}>
                <Popup>
                    Joensuu
                </Popup>
            </Marker>
        </MapContainer>
    )
}