// Solution
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