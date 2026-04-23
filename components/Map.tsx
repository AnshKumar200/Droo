'use client';

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from "react";
import L from "leaflet"
import RoutesList from "./RoutesList";

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
    const [position, setPosition] = useState<[number, number] | null>([28.6329401, 77.2194201]);

    useEffect(() => {
        if (!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setPosition([pos.coords.latitude, pos.coords.longitude]);
                },
                () => {
                    fetch("https://ipapi.co/json/")
                        .then(res => res.json())
                        .then(data => setPosition([data.latitude, data.longitude]));
                }
            );
        }
    }, []);

    return (
        <div className="relative w-full h-full">
            {!position && (
                <div className="" style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', zIndex: 2, background: 'white', padding: '6px 12px', borderRadius: 8, fontSize: 13 }}>
                    Getting your location...
                </div>
            )}
            {position && (
                <div>
                    <RoutesList />
                </div>
            )}
            <MapContainer center={[20, 0]} zoom={2} className="w-full h-full z-0">
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
