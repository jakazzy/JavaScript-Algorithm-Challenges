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

// freecode camp algorithm challenges
function getIndex(denoCurrency, change) {
    for (let i = denoCurrency.length - 1; i >= 0; i--) {
        if (change > denoCurrency[i].value) {
            return i;
        }
    }
}

function checkCashRegister(price, cash, cid) {
    let change = (cash - price);
    change = parseFloat(change.toFixed(2));



    let value = { status: null, change: [] }
    let denoCurrency = [{ name: "PENNY", value: 0.01 },
        { name: "NICKEL", value: 0.05 },
        { name: "DIME", value: 0.1 },
        { name: "QUARTER", value: 0.25 },
        { name: "ONE", value: 1 },
        { name: "FIVE", value: 5 },
        { name: "TEN", value: 10 },
        { name: "TWENTY", value: 20 },
        { name: "ONE HUNDRED", value: 100 },
    ]

    let cidToObj = {};
    for (let item of cid) {
        cidToObj[item[0]] = item[1];
    }
    let total = cid.reduce((acc, curVal) => { return acc + curVal[1] }, 0).toFixed(2);
    total = parseFloat(total);

    if (change === total) {
        value.status = "CLOSED";
        value.change = cid;
        return value;
    }

    if (parseInt(change) > parseInt(total)) {
        value.status = "INSUFFICIENT_FUNDS";
        value.change = [];
        return value;
    }


    let index = getIndex(denoCurrency, change);
    let cidNeeded = cid.splice(0, index + 1);
    let cidChange = cidNeeded.reduce((acc, curV) => {
        return acc + curV[1];
    }, 0);

    if (cidChange < change) {
        value.status = "INSUFFICIENT_FUNDS";
        value.change = [];
        return value;
    }


    // incomius
    while (change && index >= 0) {
        let cidVal = cidToObj[denoCurrency[index].name];

        if (change > cidVal) {
            console.log("c2: ", change, "Ind2: ", index, "cidVal2: ", cidVal);
            if (cidVal !== 0) {
                value.change.push([denoCurrency[index].name, cidVal]);
            }
            value.status = "OPEN";
            change = parseFloat((change - cidVal).toFixed(2));
            index--;
            cidVal = cidToObj[denoCurrency[index].name]
            console.log("c3: ", change, "Ind3: ", index, "cidVal3: ", cidVal);
        }

        if (cidVal > change) {
            let rem = change % denoCurrency[index].value;
            let num = change - rem;
            value.status = "OPEN";

            if (num !== 0) {
                value.change.push([denoCurrency[index].name, num]);
            }

            change = parseFloat(rem.toFixed(2));
            index--;
        }


        //incomius
    }

    return value;
}