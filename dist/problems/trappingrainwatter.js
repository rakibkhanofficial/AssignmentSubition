"use strict";
// Trap Rain Water
function trapRainWater(height) {
    // Edge case: if the elevation map is empty or too short, no water can be trapped.
    if (height.length < 3)
        return 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let trappedWater = 0;
    while (left < right) {
        if (leftMax <= rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            trappedWater += Math.max(0, leftMax - height[left]);
        }
        else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            trappedWater += Math.max(0, rightMax - height[right]);
        }
    }
    return trappedWater;
}
// Test cases
const test1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// Expected: 6
console.log('Test 1:', trapRainWater(test1));
const test2 = [4, 2, 0, 3, 2, 5];
// Expected: 9
console.log('Test 2:', trapRainWater(test2));
const test3 = [1, 2, 3, 4, 5];
// Expected: 0
console.log('Test 3:', trapRainWater(test3));
