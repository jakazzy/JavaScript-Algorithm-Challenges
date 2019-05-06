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

//Solution removeDuplicates and do not allocate space for another array

var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i])
            nums[++i] = nums[j];
    }
    return ++i;
};

//Caesar's cipher - Freecode camp
function rot13(str) { // LBH QVQ VG!
    convertToRot13 = {
        "A": "N",
        "B": "O",
        "C": "P",
        "D": "Q",
        "E": "R",
        "F": "S",
        "G": "T",
        "H": "U",
        "I": "V",
        "J": "W",
        "K": "X",
        "L": "Y",
        "M": "Z",
        "N": "A",
        "O": "B",
        "P": "C",
        "Q": "D",
        "R": "E",
        "S": "F",
        "T": "G",
        "U": "H",
        "V": "I",
        "W": "J",
        "X": "K",
        "Y": "L",
        "Z": "M"
    };
    let letters = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] in convertToRot13) {
            letters = letters + convertToRot13[str[i]];
        } else letters = letters + str[i];
    }
    return letters;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");