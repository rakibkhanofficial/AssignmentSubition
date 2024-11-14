"use strict";
// Edit Distance
// This function finds how many steps needed to change one word into another
function makeWordsMatch(word1, word2) {
    // Create a simple table to store our counting
    // We add 1 to lengths because we need extra row and column for empty string
    const table = [];
    // Set up the table with empty arrays
    for (let i = 0; i <= word1.length; i++) {
        table[i] = new Array(word2.length + 1).fill(0);
    }
    // Fill first row - steps needed to make empty string into word2
    for (let i = 0; i <= word2.length; i++) {
        table[0][i] = i;
    }
    // Fill first column - steps needed to make word1 into empty string
    for (let i = 0; i <= word1.length; i++) {
        table[i][0] = i;
    }
    // Now let's fill the rest of the table
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            // If letters are same, no extra step needed
            if (word1[i - 1] === word2[j - 1]) {
                table[i][j] = table[i - 1][j - 1];
            }
            else {
                // If letters are different, take the smallest previous step and add 1
                table[i][j] = Math.min(table[i - 1][j - 1], // replace
                table[i - 1][j], // delete
                table[i][j - 1] // insert
                ) + 1;
            }
        }
    }
    // The answer is in the bottom-right corner
    return table[word1.length][word2.length];
}
// test cases
console.log("Test 1: Changing 'horse' to 'ros', Changes needed:", makeWordsMatch("horse", "ros"));
console.log("Test 2: Changing 'intention' to 'execution', Changes needed:", makeWordsMatch("intention", "execution"));
console.log("Test 3: Changing 'abc' to 'abc', Changes needed:", makeWordsMatch("abc", "abc"));
