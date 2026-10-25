Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

answer:


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    let k = 0; // k is a counter that also tells us where to put the next number we want to keep.
    for(let i=0; i<nums.length;i++){
       if(nums[i] !== val){
        nums[k] = nums[i]
        k++
       }
    }
    return k;
};

Variable / code	Simple meaning
i	Checks each number
k	Tracks where to put the next valid number
nums[k] = nums[i]	Copies a valid number into the correct position
k++	Increases the count of valid numbers
return k	Returns the final count


* want to display the array values

var removeElement = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return {
        k: k,
        nums: nums.slice(0, k)
    };
};

console.log(removeElement([3, 2, 2, 3], 3));

output
{
    k: 2,
    nums: [2, 2]
}