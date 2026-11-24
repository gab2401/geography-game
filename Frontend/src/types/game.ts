import type { Rarity } from "../data/questions";

export type AnswerResult = {
    country: string;
    correct: boolean;
    points: number;
    rarity: Rarity | null;
};