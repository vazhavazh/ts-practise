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
var middleAge = function (array) {
    var sumOfAge = array.reduce(function (acc, el) {
        return acc + el.age;
    }, 0);
    var quantityOfObjs = array.length;
    var averageValue = sumOfAge / quantityOfObjs;
    return averageValue;
};
var people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Alice", age: 21 },
];
console.log(middleAge(people)); // 29
var theBiggestPrice = function (array) {
    var result = array.reduce(function (acc, el) {
        if (el.price > acc) {
            acc = el.price;
        }
        return acc;
    }, 0);
    return result;
};
var items = [
    { name: "Book", price: 15 },
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 700 },
    { name: "TV", price: 1500 },
    { name: "Headphones", price: 200 },
];
console.log(theBiggestPrice(items)); // 1500
var arrayFilterName = function (array, startLetter) {
    var result = array.filter(function (el) {
        return el.name.startsWith(startLetter);
    });
    return result;
};
var people1 = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 40 },
    { name: "Alice", age: 21 },
];
console.log(arrayFilterName(people1, "J"));
// ? 11) Створи функцію, яка приймає масив чисел та повертає новий масив,
// ? в якому кожен елемент є квадратом відповідного елемента вхідного масиву.
var squaredArray = function (array) {
    var result = array.map(function (el) {
        var square = Math.pow(el, 2);
        return square;
    });
    return result;
};
var arrayOfNumbers = [1, 2, 3, 4, 5];
console.log(squaredArray(arrayOfNumbers));
// ? 12) Створи функцію, яка приймає рядок та повертає новий рядок,
// ? в якому кожна літера перетворена на відповідну їй цифру в ASCII таблиці charCodeAt()
var stringToCodeTranslator = function (str) {
    var arr = str.split("");
    var codesInArr = arr.map(function (el) { return el.charCodeAt(0); });
    var resultStr = codesInArr.join("");
    return resultStr;
};
console.log(stringToCodeTranslator("Olga")); // "7910810397"
// ?? 13) Створи функцію, яка приймає масив чисел та повертає новий масив,
// ?? який містить тільки непарні числа з вхідного масиву.
var odding = function (arr) {
    var newArr = arr.filter(function (el) { return el % 2 !== 0; });
    return newArr;
};
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(odding(numbers)); // [1, 3, 5, 7, 9]
// ?? 14) Створи функцію, яка приймає два масиви та повертає новий масив,
// ?? який містить всі елементи першого масиву, які не зустрічаються в другому масиві.
var arrChecker = function (arr1, arr2) {
    var result = arr1.filter(function (el1) { return !arr2.includes(el1); });
    return result;
};
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [3, 4, 5, 6, 7];
console.log(arrChecker(arr1, arr2)); // [1, 2]
// ?? 15) Створи функцію, яка приймає масив об'єктів та повертає новий масив,
// ?? який містить тільки ті об'єкти з вхідного масиву,
// ?? які мають властивість age більшу або дорівнює заданому значенню.
var AGE = 18;
var ageFilter = function (arr) {
    var result = arr.filter(function (el) { return el.age >= 18; });
    return result;
};
var arr = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 18 },
    { name: "Dave", age: 16 },
];
console.log(ageFilter(arr));
// ?? 16) Створи функцію, яка приймає рядок та повертає новий рядок,
// ?? який містить тільки унікальні символи з вхідного рядка,
// ?? в тому ж порядку, в якому вони зустрічаються в оригінальному рядку
var uniqString = function (str) {
    var arr = str.split("");
    var filteredArr = arr.filter(function (el, idx, arr) { return arr.indexOf(el) === idx; });
    var result = filteredArr.join("");
    return result;
};
console.log(uniqString("abbcddeff")); // abcdef
console.log(uniqString("Hello, world!")); // Helo, wrd!
//  ?? 17) Напиши функцію,
// ?? яка приймає масив і повертає останній елемент масиву.
// ?? Якщо масив порожній, функція повертає null.
var lastEl = function (arr) {
    var copy = __spreadArray([], arr, true);
    if (copy.length === 0) {
        return null;
    }
    var lastEl = copy.pop();
    return lastEl;
};
console.log(lastEl([1, 2, 3, 4, 5])); // 5
console.log(lastEl([])); // null
console.log(lastEl(["hello", "world"])); // "world"
//  ?? 18) Напиши функцію, яка приймає два масиви і повертає новий масив,
// ?? в якому елементи - це сума елементів з однаковими індексами у вхідних масивах.
var sumOfSameIndex = function (arr1, arr2) {
    var resultArray = [];
    for (var i = 0; i < Math.min(arr1.length, arr2.length); i++) {
        var newEl = arr1[i] + arr2[i];
        resultArray.push(newEl);
    }
    return resultArray;
};
console.log(sumOfSameIndex([1, 2, 3], [4, 5, 6])); // [5, 7, 9]
console.log(sumOfSameIndex([1, 2, 3], [4, 5])); // [5, 7]
console.log(sumOfSameIndex([1, 2], [4, 5, 6])); // [5, 7]
console.log(sumOfSameIndex([], [4, 5, 6])); // []
console.log(sumOfSameIndex([], [])); // []
// ?? 19) Напиши функцію, яка приймає масив чисел і повертає новий масив,
// ??  в якому елементи - це квадрати чисел з вхідного масиву,
// ?? відсортовані в порядку зростання.
var squareAndSort = function (arr) {
    var squaredCopy = arr.map(function (el) { return Math.pow(el, 2); });
    var resultArr = squaredCopy.sort(function (a, b) { return a - b; });
    return resultArr;
};
var arr3 = [3, -1, 0, 2, 4];
console.log(squareAndSort(arr3)); // [0, 1, 4, 9, 16]
// ?? 20) Напиши функцію, яка приймає рядок як аргумент ,
// ?? та повертає кількість голосних літер у рядку.
var countVowels = function (str) {
    var arrOfVowels = ["a", "e", "i", "o", "u"];
    var arrFromString = str.toLowerCase().split("");
    var result = arrFromString.reduce(function (acc, el) {
        if (arrOfVowels.includes(el) && el !== "") {
            acc++;
        }
        return acc;
    }, 0);
    return result;
};
console.log(countVowels("Hello, world!")); // 3
console.log(countVowels("How are you?")); // 5
console.log(countVowels("")); // 0
// ?? 21) Створи функцію, яка приймає масив чисел та повертає новий масив,
//  ?? який містить кожне число вихідного масиву, помножене на 2.
var multiPlyEl = function (arr) {
    var result = arr.map(function (el) { return el * 2; });
    return result;
};
var arr4 = [1, 2, 3, 4, 5];
console.log(multiPlyEl(arr4)); //
// ?? 22) Створи функцію, яка приймає масив рядків та повертає новий масив,
// ??  який містить тільки ті рядки, які містять більше 5 символів.
var arrFilter = function (arr) {
    var result = arr.filter(function (el) { return el.length > 5; });
    return result;
};
console.log(arrFilter(["hello", "world", "goodbye", "nice", "to", "meet", "you"])); // ["goodbye", "meet"]
console.log(arrFilter(["abc", "def", "ghijkl", "mno"])); // ["ghijkl"]
console.log(arrFilter([])); // []
// ?? 23) Створи функцію, яка приймає масив рядків та повертає новий масив,
// ??  який містить тільки рядки, що починаються з великої літери.
var filterByUpperCase = function (arr) {
    var result = arr.filter(function (el) { return el[0] === el[0].toUpperCase(); });
    return result;
};
console.log(filterByUpperCase(['Apple', 'banana', 'Cherry', 'Date'])); // ['Apple', 'Cherry', 'Date']
// ?? 24) Створи функцію, яка приймає масив рядків та повертає новий масив,
// ?? який містить тільки рядки, які містять підрядок "JS".
var arrFilter4 = function (arr) {
    var result = arr.filter(function (el) {
        if (el === '') {
            return;
        }
        return el.includes('JS');
    });
    return result;
};
console.log(arrFilter4(['JavaScript', 'TypeScript', 'Python', 'JS'])); // ['JavaScript', 'JS']
console.log(arrFilter4(['Hello', '', 'JS World'])); // ['JS World']
console.log(arrFilter4(['JS', 'js', ''])); // ['JS']
