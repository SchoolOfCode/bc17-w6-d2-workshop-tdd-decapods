export function calculateScrabbleScore(word) {
    let score = 0
    if (word === `A`) {
        score++
    };
    if (word === `B`) {
        score+=3
    }
    if (word === `C`) {
        score+=3
    }
    return score;
}
