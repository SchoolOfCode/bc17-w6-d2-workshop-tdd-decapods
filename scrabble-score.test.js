import { calculateScrabbleScore } from "./scrabble-score";
import { test, expect } from "vitest";

test("A score test", () => {
	expect(calculateScrabbleScore(`A`)).toBe(1);
});

test.each([
	{ a: "A", expected: 1 },
	{ a: "B", expected: 3 },
	{ a: "C", expected: 3 },
])("calculateScrabbleScore ($a)) -> $expected ", ({ a, expected }) => {
	expect(b).toBe(expected);
});
