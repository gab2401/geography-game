export type Question = {
    id: number;
    text: string;
    correctCountry: string;
    points: number;
};

export const questions: Question[] = [
    {
        id: 1,
        text: "Quale Paese ha Roma come capitale?",
        correctCountry: "Italy",
        points: 100
    },
    {
        id: 2,
        text: "Quale Paese ha Berlino come capitale?",
        correctCountry: "Germany",
        points: 100
    },
    {
        id: 3,
        text: "Quale Paese ha Tokyo come capitale?",
        correctCountry: "Japan",
        points: 100
    }
];

