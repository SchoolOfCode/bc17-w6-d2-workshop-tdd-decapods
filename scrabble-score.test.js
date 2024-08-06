import { calculateScrabbleScore } from "./scrabble-score";
import { test, expect } from "vitest";

test('A score test', () => {
    expect(calculateScrabbleScore(`A`)).toBe(1)
})