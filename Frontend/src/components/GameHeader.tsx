type GameHeaderProps = {
    title: string;
    subtitle: string;
};

function GameHeader({
                        title,
                        subtitle
                    }: GameHeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
}

export default GameHeader;
