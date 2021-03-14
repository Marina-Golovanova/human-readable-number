module.exports = function toReadable(n) {
    newStr = ''
    if (String(n).split('').length === 3) {
        newStr += getKeyByValue(numbers, +String(n).split('')[0]) + ' hundred '
        if (n % 100 === 0) {
            return newStr.substr(0, newStr.length - 1);
        } else {
            n -= +(String(n).split('')[0] * 100);
        }
    }
    if (n < 20) {
        newStr += getKeyByValue(numbers, +(String(n)))
    } else if (n % 10 == 0) {
        newStr += getKeyByValue(decades, +(String(n)))
    } else {
        newStr += getKeyByValue(decades, +(String(n).split('')[0] * 10)) + ' ' + getKeyByValue(numbers, +(String(n).split('')[1]))
    }
    return newStr;
}

numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19
}

decades = {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90
}

function getKeyByValue(dict, value) {
    return Object.keys(dict).find(key => dict[key] === value);
}