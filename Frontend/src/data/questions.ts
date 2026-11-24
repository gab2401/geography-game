export type Rarity =
    | "common"
    | "uncommon"
    | "rare"
    | "legendary";

export type CountryAnswer = {
    country: string;
    rarity: Rarity;
    points: number;
};

export type Question = {
    id: number;
    text: string;
    answers: CountryAnswer[];
};

export const questions: Question[] = [
    {
        id: 1,
        text: "Seleziona un Paese confinante con l'Italia",
        answers: [
            {
                country: "France",
                rarity: "common",
                points: 25
            },
            {
                country: "Switzerland",
                rarity: "uncommon",
                points: 50
            },
            {
                country: "Austria",
                rarity: "uncommon",
                points: 50
            },
            {
                country: "Slovenia",
                rarity: "rare",
                points: 75
            },
            {
                country: "San Marino",
                rarity: "legendary",
                points: 100
            },
            {
                country: "Vatican",
                rarity: "legendary",
                points: 100
            }
        ]
    }
];