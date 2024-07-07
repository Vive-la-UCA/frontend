'use client'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import { icon } from 'leaflet';

const ICON = icon({
    iconUrl: "https://images.ctfassets.net/3prze68gbwl1/assetglossary-17su9wok1ui0z7w/c4c4bdcdf0d0f86447d3efc450d1d081/map-marker.png",
    iconSize: [32, 32],
})


export default function MapLocations({ position }) {



    return (
        <div>
            <MapContainer center={position} dragging={false} scrollWheelZoom={false} zoom={20} className='h-[20rem] w-full rounded-xl outline-none'>

                <TileLayer
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={20}
                    subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                />

                <Marker position={position} icon={ICON} />
            </MapContainer>
        </div>
    );
};

