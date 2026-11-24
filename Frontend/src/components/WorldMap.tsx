import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import type { FeatureCollection } from "geojson";
import type { Layer } from "leaflet";
import "leaflet/dist/leaflet.css";

type WorldMapProps = {
    onCountrySelect: (country: string) => void;
};

function WorldMap({ onCountrySelect }: WorldMapProps) {
    const [countries, setCountries] =
        useState<FeatureCollection | null>(null); // useState e' inizializzato a null per indicare che i dati non sono ancora stati caricati

    const [selectedCountry, setSelectedCountry] =
        useState<string | null>(null);

    useEffect(() => {
        fetch("/countries.geojson")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Errore nel caricamento dei Paesi");
                }
                return response.json();
            })
            .then((data: FeatureCollection) => setCountries(data))
            .catch(console.error);
    }, []);

    function onEachCountry(
        feature: GeoJSON.Feature,
        layer: Layer
    ) {
        layer.on("click", () => {
            const name = feature.properties?.name ?? "Sconosciuto";

            setSelectedCountry(name);

            onCountrySelect(name);
        });
    }

    return (
        <>
            <h2>
                {selectedCountry
                    ? `Hai selezionato: ${selectedCountry}`
                    : "Seleziona un Paese"}
            </h2>

            <div style={{ height: "100%", width: "100%" }}>
                <MapContainer
                    center={[20, 0]}
                    zoom={2}
                    minZoom={2}
                    style={{ height: "100%", width: "100%" }}
                >

                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {countries && (
                        <GeoJSON
                            data={countries}
                            onEachFeature={onEachCountry}
                            style={{
                                color: "#334155",
                                weight: 1,
                                fillColor: "#e6d6a8",
                                fillOpacity: 0.35,
                            }}
                        />
                    )}
                </MapContainer>
            </div>
        </>
    );
}

export default WorldMap;
