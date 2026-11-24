import GameHeader from "./components/GameHeader";
import WorldMap from "./components/WorldMap";
import GamePanel from "./components/GamePanel.tsx";
import { useState } from "react";
import "./App.css";

function App() {
    const [score, setScore] = useState<number>(0);

    return (
        <main className="app">
            <GameHeader
                title="Geography Game"
                subtitle="Esplora il mondo!"
            />

            <GamePanel score={score} />

            <button onClick={() => setScore(score + 100)}>
                Aggiungi 100 punti
            </button>

            <button
                onClick={() => setScore(prev => Math.max(prev - 50, 0))}
            >
                Rimuovi 50 punti
            </button>

            <button onClick={() => setScore(0)}>
                Azzera punteggio
            </button>

            <div className="map-wrapper">
                <WorldMap />
            </div>
        </main>
    );
}

export default App;
