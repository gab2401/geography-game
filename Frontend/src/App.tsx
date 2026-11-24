import GameHeader from "./components/GameHeader";
import WorldMap from "./components/WorldMap";
import GamePanel from "./components/GamePanel";
import { useState } from "react";
import AnswerFeedback from "./components/AnswerFeedback";
import type { AnswerResult } from "./types/game";
import { questions } from "./data/questions";
import "./App.css";

function App() {

    const [score, setScore] = useState<number>(0);
    const [lastAnswer, setLastAnswer] = useState<AnswerResult | null>(null);
    const currentQuestion = questions[0];

    function checkAnswer(country: string) {
        const answer = currentQuestion.answers.find(
            item => item.country === country
        );

        if (!answer) {
            console.log("Risposta sbagliata!");
            setLastAnswer({
                country: country,
                correct: false,
                points: 0,
                rarity: null
            });
        } else {
            setScore(prev => prev + answer.points);
            setLastAnswer({
                country: answer.country,
                correct: true,
                points: answer.points,
                rarity: answer.rarity
            });
            console.log(answer.points, answer.rarity);
        }
    }

    function resetGame() {
        setScore(0);
        setLastAnswer(null);
    }

    return (
        <main className="app">

            <GameHeader
                title="Worldbound"
                subtitle="Esplora il mondo!"
            />

            <GamePanel score={score} />

            <button onClick={resetGame}>
                Azzera punteggio
            </button>

            <h2>{currentQuestion.text}</h2>

            <AnswerFeedback result={lastAnswer} />

            <div className="map-wrapper">
                <WorldMap onCountrySelect={checkAnswer} />
            </div>

        </main>
    );
}

export default App;
