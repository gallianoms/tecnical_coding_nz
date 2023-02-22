"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
//* Exercise 1. Multiply 2 numbers without *
var multiply = function (num1, num2) {
    // return num1 / (1 / num2 )
    var sum = 0;
    var positive = Math.abs(num2) === num2;
    for (var i = 0; i < Math.abs(num2); i++) {
        sum = positive ? sum + num1 : sum - num1;
    }
    return sum;
};
// console.log(multiply(2, 4)) // 8
// console.log(multiply(2, -4)) // -8
//* Exercise 2. Return the biggest number of array (loop just ONE)
var arr = [1, 2, 6, 3, 2, 7, 3];
var getBiggest = function (arr) {
    // const newArr = arr.sort((a,b) => b - a)
    // return newArr[0]
    // return arr.reduce((acc,num) => acc > num ? acc : num)
    return Math.max.apply(Math, arr);
};
// console.log(getBiggest(arr))
//* Exercise 3. Write func to eliminate `undefined`, `false`, `0`, `null` (loop just ONE)
var array = [
    false,
    1,
    false,
    3,
    undefined,
    5,
    'a',
    'g',
    3,
    undefined,
    true,
    0,
    null,
    0,
    0,
];
// Output: [1, 3, 5, 'a', 'g', 3]
var clean = function (array) {
    // return array.filter(item => {
    //   return (item !== false && item !== undefined && item !== 0 && item !== null)
    // })
    return array.reduce(function (acc, item) {
        if (item) {
            acc.push(item);
        }
        return acc;
    }, []);
};
// console.log(clean(array))
//* Exercise 4. Write func to flat array 1 level
var arrAux = [[1, 2], [[3, 4]], [[[5, 6]]]];
// Output: [1, 2, [3, 4], [[5, 6]]]
var flatten = function (arrAux) {
    return arrAux.flat();
    // return arrAux.reduce((acc, item) => {
    //   acc.push(item.flat())
    //   return acc
    // })
    // return arrAux.reduce((acc,item) => acc.concat(item))
};
// console.log(flatten(arrAux))
// Exercise 5. Number of times the words repeats in the string
var str = 'This is a repeated test a is a';
var repeated = function (str) {
    var words = str
        .toLowerCase()
        .split(' ')
        .reduce(function (acc, word) {
        var _a;
        acc[word] = ((_a = acc[word]) !== null && _a !== void 0 ? _a : 0) + 1;
        return acc;
    }, {});
    return Object.entries(words)
        .sort(function (a, b) { return b[1] - a[1]; })
        .slice(0, 1)
        .flat();
};
// console.log(repeated(str))
// Check if a word is palindrome
var isPalindrome = function (str) {
    var strInitial = str
        .toLowerCase()
        .split('')
        .filter(function (char) { return char !== ' '; });
    // .join('')
    var strFinal = __spreadArray([], strInitial, true).reverse();
    // console.log(strInitial)
    // console.log(strFinal)
    return strInitial.every(function (char, idx) { return char === strFinal[idx]; });
};
console.log(isPalindrome('tenet')); // true
console.log(isPalindrome('home')); // false
console.log(isPalindrome('kayak')); // true
console.log(isPalindrome('Do geese see God')); // true
