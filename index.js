//! 1) Створи функцію, яка приймає масив чисел і повертає масив з тими ж числами,
// !    але відсортованими в порядку зростання.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var sortFunc = function (array) {
    var arrayCopy = __spreadArray([], array, true);
    arrayCopy.sort(function (a, b) { return a - b; });
    return arrayCopy;
};
var testArray = [100, 1, 10, 80, 56];
console.log(sortFunc(testArray)); // ! [1, 10, 56, 80, 100]
// ********************************************************************
// ! 2) Створи функцію, яка приймає рядок і повертає новий рядок,
// ! у якому перша літера кожного слова замінена на велику.
var capitalizeFirstLetter = function (str) {
    var arrayFromStr = str.split(" ");
    var resultArray = arrayFromStr.map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
    });
    var resultString = resultArray.join(" ");
    return resultString;
};
console.log(capitalizeFirstLetter("hello world")); // Hello World
var objectsSorterByAge = function (arr) {
    var filteredArray = arr.filter(function (person) { return person.age >= 18; });
    return filteredArray;
};
var myObject = [
    { name: "John", age: 25 },
    { name: "Jane", age: 17 },
    { name: "Bob", age: 31 },
];
console.log(objectsSorterByAge(myObject));
// !! 4) Створи функцію, яка приймає масив чисел і повертає середнє арифметичне цих чисел.
var averageValue = function (array) {
    var totalValue = array.reduce(function (acc, el) {
        return acc + el;
    }, 0);
    var elQuantity = array.length;
    var aveRage = totalValue / elQuantity;
    return aveRage;
};
var testArray1 = [10, 10, 10];
console.log(averageValue(testArray1)); // ! 10
// ?? 5) Створи функцію, яка приймає рядок і повертає новий рядок,
// ??    у якому всі слова з великої літери записані в оберненому порядку.
var reverseWords = function (str) {
    var arrayFromString = str.split(" ");
    var resultArray = arrayFromString.map(function (word) {
        if (word[0] === word[0].toUpperCase()) {
            var wordToReverse = word.split("").reverse().join("");
            return wordToReverse;
        }
        return word;
    });
    var resultStr = resultArray.join(" ");
    return resultStr;
};
console.log(reverseWords("Hello World and I")); //  olleH dlroW and I
// ? 6) Створи функцію, яка приймає два аргументи - рядок та символ,
// ? і повертає кількість входжень цього символу в рядок.
var includeCalc = function (string, symbol) {
    var arrayFromStr = string.split("");
    var result = arrayFromStr.reduce(function (acc, el) {
        if (el === symbol) {
            acc++;
        }
        return acc;
    }, 0);
    return result;
};
console.log(includeCalc("albatros", "a")); // 2
//  ? 7) Створи функцію, яка приймає масив чисел та повертає новий масив,
// ?який містить лише унікальні числа з вихідного масиву
// ? (тобто кожне число в новому масиві зустрічається тільки один раз).
var arrayUniqFilter = function (array) {
    var resultArray = array.filter(function (el, idx, arr) {
        return arr.indexOf(el) === idx;
    });
    return resultArray;
};
console.log(arrayUniqFilter([1, 2, 2, 3, 4, 4, 5, 5, 5])); // [1, 2, 3, 4, 5]