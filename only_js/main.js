// Створи функцію, яка приймає масив чисел і повертає масив з тими ж числами,
//     але відсортованими в порядку зростання.

// const sortFunc = (array) => {
//     const newArray = [...array]
//     newArray.sort((a, b) => a - b)

//     return newArray;
// }

// const testArray = [100, 1, 10, 80, 56];

// console.log(sortFunc(testArray))


// const objectSorterByAge = (arr) => {
//    const filteredArray = arr.filter((object) => object.age >= 18)
//     return filteredArray
// }


// const myObject = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 17 },
//     { name: "Bob", age: 31 },
// ];

// console.log(objectSorterByAge(myObject))


// const averageValue = (array) => {
//     const totalValue = array.reduce((acc, el) => {
//         return acc + el;
//     });


//     const elQuantity = array.length;

//     const aveRage = totalValue / elQuantity;

//     return aveRage;
// };

// const testArray1 = [10, 10, 10];
// console.log(averageValue(testArray1))


// const countVowels = (str) => {
//     const arrOfVowels = ["a", "e", "i", "o", "u"];

//     const arrFromString = str.toLowerCase().split("");
//     const result = arrFromString.reduce((acc, el) => {
//         if (arrOfVowels.includes(el) && el !== '') {
//             acc++;
//         }
//         return acc;
//     }, 0);
//     return result;
// };

// console.log(countVowels("Hello, world!")); // 3
// console.log(countVowels("How are you?")); // 5
// console.log(countVowels("")); // 0

