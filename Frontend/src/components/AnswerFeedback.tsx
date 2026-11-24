
import type { AnswerResult } from "../types/game";
import "./AnswerFeedback.css";

type AnswerFeedbackProps = {
    result: AnswerResult | null;
};

function AnswerFeedback({ result }: AnswerFeedbackProps) {

    if (!result) {
        return <p>Seleziona un Paese sulla mappa!</p>;
    }

    const rarityClass = result.correct
        ? result.rarity
        : "incorrect";

    return (
        <section className={`answer-feedback ${rarityClass}`}>

            <h2>
                {result.correct
                    ? "Risposta corretta!"
                    : "Risposta sbagliata!"}
            </h2>

            <p>{result.country}</p>

            <p>+{result.points} punti</p>

            {result.correct && <p>{result.rarity}</p>}

        </section>
    );
}

export default AnswerFeedback;
