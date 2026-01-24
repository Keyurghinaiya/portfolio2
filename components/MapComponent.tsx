"use client";

import { MapContainer, TileLayer, CircleMarker, Marker, Tooltip, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon in Leaflet
const DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

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

            <Circle
                center={position}
                radius={2000} // ~2km radius to cover central Halifax
                pathOptions={{
                    color: "#3b82f6",
                    fillColor: "#3b82f6",
                    fillOpacity: 0.2,
                    weight: 2,
                    dashArray: '5, 5'
                }}
            />

            <Marker position={position}>
                <Tooltip permanent direction="top" offset={[0, -40]} className="bg-blue-600 border-none text-white font-bold rounded px-2 py-1">
                    Halifax, Nova Scotia
                </Tooltip>
            </Marker>

            <CircleMarker
                center={position}
                radius={8}
                pathOptions={{ color: "#3b82f6", fillColor: "#3b82f6", fillOpacity: 0.8 }}
            />
        </MapContainer>
    );
}
