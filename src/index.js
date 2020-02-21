module.exports = function toReadable(number) {
    const units = {
        "0": "",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine"
    };

    const dozens = {
        "0": "",
        "2": "twenty",
        "3": "thirty",
        "4": "forty",
        "5": "fifty",
        "6": "sixty",
        "7": "seventy",
        "8": "eighty",
        "9": "ninety"
    };

    const oneDozens = {
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen"
    };

    if (number === 0) {
        return "zero";
    }

    let result = "";

    const hundreds = Math.floor(number / 100);

    number = number % 100;

    if (hundreds) {
        result += `${units[hundreds]} hundred`;
    }

    const dozensNumber = Math.floor(number / 10);
    const unitsNumber = number % 10;

    if (dozensNumber === 1) {
        if (unitsNumber === 0) {
            result += ` ten`;
        } else {
            result += ` ${oneDozens[number]}`;
        }
    } else {
        result += ` ${dozens[dozensNumber]}`;
        result = result.trim();
        result += ` ${units[unitsNumber]}`;
    }

    return result.trim();
};
