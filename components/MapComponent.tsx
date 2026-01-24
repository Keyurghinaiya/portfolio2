"use client";

import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent() {
    const position: [number, number] = [44.6488, -63.5752]; // Halifax, NS coordinates

    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
            zoomControl={false}
            attributionControl={false}
        >
            {/* Dark Matter Map (No Labels) */}
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
            />
            <CircleMarker
                center={position}
                radius={10}
                pathOptions={{ color: "#3b82f6", fillColor: "#3b82f6", fillOpacity: 0.5 }}
            >
            </CircleMarker>
        </MapContainer>
    );
}
