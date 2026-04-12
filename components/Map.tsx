'use client';

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from "react";
import L from "leaflet"

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

function RecenterMap({ position }: { position: [number, number] }) {
    const map = useMap()
    useEffect(() => { map.setView(position, 15) }, [position])
    return null
}

const Map = () => {
    const [position, setPosition] = useState<[number, number] | null>([28.6329401, 77.2194201])
    const [locationError, setLocationError] = useState<string | null>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                console.log('got ittt!')
                setPosition([pos.coords.latitude, pos.coords.longitude])
            },
            (err) => {
                console.error('location unavailable: ', err)
                setLocationError('Could not get your location')
            })
    }, [])

    return (
        <div className="relative h-full w-full">
            {!position && !locationError && (
                <div className="" style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', zIndex: 1000, background: 'white', padding: '6px 12px', borderRadius: 8, fontSize: 13 }}>
                    Getting your location...
                </div>
            )}
            <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                />
                {position && (
                    <>
                        <RecenterMap position={position} />
                        <Marker position={position}>
                            <Popup>You are here!</Popup>
                        </Marker>
                    </>
                )}
            </MapContainer>
        </div>
    )
}

export default Map;
