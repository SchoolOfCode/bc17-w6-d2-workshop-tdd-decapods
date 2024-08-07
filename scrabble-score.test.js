import { calculateScrabbleScore } from "./scrabble-score";
import { test, expect } from "vitest";

test("A score test", () => {
	expect(calculateScrabbleScore(`A`)).toBe(1);
});

test.each([
	{ a: "A", expected: 1 },
	{ a: "B", expected: 3 },
	{ a: "C", expected: 3 },
    { a: "D", expected: 2 },
    { a: "E", expected: 1 },
    { a: "F", expected: 4 },
    { a: "G", expected: 2 },
    { a: "H", expected: 4 },
    { a: "I", expected: 1 },
    { a: "J", expected: 8 },
    { a: "K", expected: 5 },
    { a: "L", expected: 1 },
    { a: "M", expected: 3 },
    { a: "N", expected: 1 },
    { a: "O", expected: 1 },
    { a: "P", expected: 3 },
    { a: "Q", expected: 10 },
    { a: "R", expected: 1 },
    { a: "S", expected: 1 },
    { a: "T", expected: 1 },
    { a: "U", expected: 1 },
    { a: "V", expected: 4 },
    { a: "W", expected: 4 },
    { a: "X", expected: 8 },
    { a: "Y", expected: 4 },
    { a: "Z", expected: 10 }
])("calculateScrabbleScore ($a) -> $expected ", ({ a, expected }) => {
	expect(calculateScrabbleScore(a)).toBe(expected);
});

test("multiple letter test 1", () => {
	expect(calculateScrabbleScore(`ABC`)).toBe(7);
});