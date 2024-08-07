export function calculateScrabbleScore(word) {
    let score = 0
        if (word === 'A') { score += 1; }
        if (word === 'B') { score += 3; }
        if (word === 'C') { score += 3; }
        if (word === 'D') { score += 2; }
        if (word === 'E') { score += 1; }
        if (word === 'F') { score += 4; }
        if (word === 'G') { score += 2; }
        if (word === 'H') { score += 4; }
        if (word === 'I') { score += 1; }
        if (word === 'J') { score += 8; }
        if (word === 'K') { score += 5; }
        if (word === 'L') { score += 1; }
        if (word === 'M') { score += 3; }
        if (word === 'N') { score += 1; }
        if (word === 'O') { score += 1; }
        if (word === 'P') { score += 3; }
        if (word === 'Q') { score += 10; }
        if (word === 'R') { score += 1; }
        if (word === 'S') { score += 1; }
        if (word === 'T') { score += 1; }
        if (word === 'U') { score += 1; }
        if (word === 'V') { score += 4; }
        if (word === 'W') { score += 4; }
        if (word === 'X') { score += 8; }
        if (word === 'Y') { score += 4; }
        if (word === 'Z') { score += 10; }
    return score;
}


// function that makes array from input, captialises it, and calls back previous function and runs it through each letter of the array 
// then use reduce through new array of numbers, and calculate total sum 
export function 
wordArray = [...letters]
word = wordArray.toUpperCase()

console.log(word);