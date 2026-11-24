type GamePanelProps = {
    score : number;
};

function GamePanel({ score }: GamePanelProps) {
    return (
        <section>
            <h2>Punteggio attuale</h2>

            <p>{score}</p>

        </section>
    );
}

export default GamePanel;
