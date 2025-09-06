import React, { useEffect, useRef } from 'react';
import { Language } from '../constants';
import L from 'leaflet';

// Leaflet CSS is loaded in index.html via a <link> tag.

interface MapProps {
    t: (key: keyof Language) => string;
}

const Map: React.FC<MapProps> = ({ t }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<L.Map | null>(null);

    // Define coordinates for polygons
    const baseZoneCoords: L.LatLngExpression[] = [
        [52.1065, 4.2856],  // Scheveningen
        [52.0863, 4.3918],  // Leidschendam
        [52.0494, 4.3942],  // Nootdorp
        [52.0116, 4.3571],  // Delft
        [51.97, 4.28],      // Near Schipluiden / De Lier
        [51.94, 4.18],      // Point south of Maasdijk to create a clean line
        [51.975, 4.08],     // Most westerly point, includes Hoek van Holland
        [52.01, 4.11],      // Point along the coast including 's-Gravenzande
        [52.035, 4.16],     // Point along the coast including Monster
        [52.0734, 4.2231]   // Kijkduin
    ];

    const extendedZoneCoords: L.LatLngExpression[] = [
        [52.1436, 4.4010],  // Wassenaar
        [52.1601, 4.4970],  // Leiden
        [52.1310, 4.6560],  // Alphen a/d Rijn
        [52.0184, 4.7056],  // Gouda
        [51.9244, 4.4777],  // Rotterdam
        [51.92, 4.30],      // North of Maassluis / Along the river
        [51.98, 4.05],      // West of Hoek van Holland (Offshore)
        [52.06, 4.15]       // Reconnect near Kijkduin/Scheveningen
    ];

    useEffect(() => {
        if (mapContainerRef.current && !mapRef.current) {
            const map = L.map(mapContainerRef.current, {
                center: [52.05, 4.35],
                zoom: 10,
                zoomControl: false, 
                attributionControl: false,
            });
            mapRef.current = map;

            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(map);

            // Add Polygons
            L.polygon(extendedZoneCoords, {
                color: '#36f5ff',
                weight: 2,
                fillColor: '#2a6976',
                fillOpacity: 0.5
            }).addTo(map);

            L.polygon(baseZoneCoords, {
                color: '#9659ff',
                weight: 2,
                fillColor: '#4a2c82',
                fillOpacity: 0.7
            }).addTo(map);
            
            // Add Zoom control
            L.control.zoom({ position: 'topleft' }).addTo(map);

            // Add Legend
            const LegendControl = L.Control.extend({
                onAdd: function() {
                    const div = L.DomUtil.create('div', 'info legend neon-panel !p-3 !bg-[rgba(12,5,29,0.8)]');
                    div.innerHTML = `
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 rounded" style="background-color: #4a2c82;"></div>
                            <span>${t('map.legend.base')}</span>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                            <div class="w-4 h-4 rounded" style="background-color: #2a6976;"></div>
                            <span>${t('map.legend.extended')}</span>
                        </div>
                    `;
                    return div;
                }
            });
            new LegendControl({ position: 'bottomright' }).addTo(map);
        }
    }, [t]);

    return (
        <>
        <section id="map" className="relative py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <h2 className="logo-font text-4xl font-bold">{t('map.title')}</h2>
                    <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto">{t('map.subtitle')}</p>
                </div>

                <div className="glowing-panel-container">
                    <div className="neon-panel !p-1.5 overflow-hidden shadow-2xl shadow-purple-500/20">
                        <div ref={mapContainerRef} style={{ height: '500px', borderRadius: '16px' }}></div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <a
                        className="btn-primary"
                        target="_blank"
                        rel="noopener"
                        href="https://www.google.com/maps/dir/?api=1&destination=Party%20Accessoires%20Verhuur%20Westland"
                    >
                        {t('map.cta')}
                    </a>
                </div>
            </div>
        </section>
        <style>{`
            .leaflet-control-zoom-in, .leaflet-control-zoom-out {
                background-color: #fff !important;
                color: #000 !important;
                border-radius: 4px !important;
                border: none !important;
                width: 30px !important;
                height: 30px !important;
                line-height: 30px !important;
                font-size: 1.5rem !important;
                font-weight: bold;
            }
            .leaflet-control-zoom-in:hover, .leaflet-control-zoom-out:hover {
                background-color: #f4f4f4 !important;
            }
            .leaflet-control-zoom {
                border: none !important;
                margin-top: 10px !important;
                margin-left: 10px !important;
            }
            .leaflet-bar a {
                border-bottom: 1px solid #ccc !important;
            }
            .leaflet-bar a:last-child {
                border-bottom: none !important;
            }
            .leaflet-container {
                background: #1a1a2e; /* Fallback for when tiles are loading */
                font-family: 'Inter', sans-serif;
            }
            .legend {
                line-height: 1.5;
                color: #e9efff;
            }
            .legend span {
                font-weight: 600;
            }
        `}</style>
        </>
    );
};

export default Map;