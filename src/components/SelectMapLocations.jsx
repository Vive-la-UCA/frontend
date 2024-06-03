'use client'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import { icon } from 'leaflet'
import { useState } from 'react'

const ICON = icon({
  iconUrl:
    'https://images.ctfassets.net/3prze68gbwl1/assetglossary-17su9wok1ui0z7w/c4c4bdcdf0d0f86447d3efc450d1d081/map-marker.png',
  iconSize: [32, 32]
})

export default function SelectMapLocations({
  onClick,
  coordsToEdit = [13.680712, -89.23623],
  idZoomedToPosition = false
}) {
  const [position, setPosition] = useState(coordsToEdit) // Pocision inicial

  const MapCoords = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng])
        onClick(e.latlng.lat, e.latlng.lng)
      }
    })
    return null
  }

  return (
    <div>
      <p>{position[0] + ',' + position[1]}</p>
      <MapContainer
        center={position}
        zoom={20}
        className="h-[20rem] w-full rounded-xl outline-none"
      >
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={idZoomedToPosition ? 50 : 30}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />

        <Marker position={position} icon={ICON} />

        <MapCoords />
      </MapContainer>
    </div>
  )
}
