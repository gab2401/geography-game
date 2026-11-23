
import WorldMap from "./components/WorldMap";
import "./App.css";

function App() {
    return (
        <main className="app">
            <h1>Geography Game</h1>

            <p>Esplora il mondo!</p>

            <div className="map-wrapper">
                <WorldMap />
            </div>
        </main>
    );
}

export default App;
