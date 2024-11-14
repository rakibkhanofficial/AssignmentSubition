"use strict";
// Function to find the length of longest valid parentheses
function longestValidParentheses(brackets) {
    // Convert string into array for easier understanding
    const chars = brackets.split('');
    let longestMatch = 0;
    // Look at each position in the string
    for (let start = 0; start < chars.length; start++) {
        // Count open and closed brackets
        let openCount = 0;
        let closedCount = 0;
        let currentLength = 0;
        // Look ahead from current position
        for (let j = start; j < chars.length; j++) {
            // Count opening brackets
            if (chars[j] === '(') {
                openCount++;
            }
            // Count closing brackets
            if (chars[j] === ')') {
                closedCount++;
            }
            // If we have same number of open and closed brackets
            if (openCount === closedCount) {
                currentLength = (j - start + 1);
                // Update longest if this is bigger
                if (currentLength > longestMatch) {
                    longestMatch = currentLength;
                }
            }
            // If we have too many closing brackets, stop looking
            if (closedCount > openCount) {
                break;
            }
        }
    }
    return longestMatch;
}
// Test Case 1
// Expected: 2
console.log("Longest valid length:", longestValidParentheses('(()'));
// Test Case 2
// Expected: 4
console.log("Longest valid length:", longestValidParentheses(')()())'));
// Test Case 3
// Expected: 2
console.log("Longest valid length:", longestValidParentheses('()(()'));
