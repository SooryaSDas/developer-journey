1. Two Sum
You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


answers:
1. solution 1

var twoSum = function(nums, target) {
    let i,j;
    for(i=0; i<nums.length;i++){
        for(j=i+1; j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
};

2. solution 2

function twoSum(nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (seen[needed] !== undefined) {
      return [seen[needed], i];
    }

    seen[nums[i]] = i;
  }
}

```javascript
const seen = {};
```
Creates an empty object to store each number and its index.

```javascript
for (let i = 0; i < nums.length; i++) {
  const needed = target - nums[i];
```
Loops through the array one number at a time and calculates which number is needed to reach the target.

```javascript
if (seen[needed] !== undefined) {
  return [seen[needed], i];
}
```
Checks whether the needed number is already stored in `seen`. If it is, return the index of that previously stored number and the index of the current number.

```javascript
seen[nums[i]] = i;
```
If the needed number was not found, store the current number and its index in `seen`, so we can check it later.