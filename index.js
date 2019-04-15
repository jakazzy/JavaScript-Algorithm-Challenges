// Solution Question 1
var romanToInt = function(s) {
    const symbolToValue = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let num = 0;
    //  let result = 0;

    for (i = 0; i < s.length; i++) {

        num = (symbolToValue[s[i]] < symbolToValue[s[i + 1]]) ?
            num - symbolToValue[s[i]] : num + symbolToValue[s[i]];
    }
    return num;
}

romanToInt("IX")

//Solution Question 2
//Reference on Leetcode, studied and existing code
const longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }

    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};

//Solution removeDuplicates
const removeDuplicates = function(nums) {
    return nums.filter((num, index) => {
        return nums.indexOf(num) == index;
    });
};