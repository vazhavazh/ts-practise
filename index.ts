//! 1) Створи функцію, яка приймає масив чисел і повертає масив з тими ж числами,
// !    але відсортованими в порядку зростання.

const sortFunc = (array: number[]): number[] => {
	const arrayCopy = [...array];
	arrayCopy.sort((a, b) => a - b);

	return arrayCopy;
};

const testArray: number[] = [100, 1, 10, 80, 56];

console.log(sortFunc(testArray)); // ! [1, 10, 56, 80, 100]

// ********************************************************************

// ! 2) Створи функцію, яка приймає рядок і повертає новий рядок,
// ! у якому перша літера кожного слова замінена на велику.

const capitalizeFirstLetter = (str: string): string => {
	const arrayFromStr = str.split(" ");
	const resultArray = arrayFromStr.map((word) => {
		return word[0].toUpperCase() + word.slice(1);
	});
	const resultString = resultArray.join(" ");
	return resultString;
};

console.log(capitalizeFirstLetter("hello world")); // Hello World

//?????????????????????????????????????????????????????????????????????????????????????????/

// !! 3) Створи функцію, яка приймає масив об'єктів і повертає новий масив,
// !! в якому тільки ті об'єкти, властивість "age" яких більше або рівна 18.

type Person = {
	name: string;
	age: number;
};

const objectsSorterByAge = (arr: Person[]): Person[] => {
	const filteredArray = arr.filter((person) => person.age >= 18);
	return filteredArray;
};

const myObject: Person[] = [
	{ name: "John", age: 25 },
	{ name: "Jane", age: 17 },
	{ name: "Bob", age: 31 },
];

console.log(objectsSorterByAge(myObject));

// !! 4) Створи функцію, яка приймає масив чисел і повертає середнє арифметичне цих чисел.

const averageValue = (array: number[]): number => {
	const totalValue = array.reduce((acc, el) => {
		return acc + el;
	}, 0);

	const elQuantity = array.length;

	const aveRage = totalValue / elQuantity;

	return aveRage;
};

const testArray1 = [10, 10, 10];
console.log(averageValue(testArray1)); // ! 10

// ?? 5) Створи функцію, яка приймає рядок і повертає новий рядок,
// ??    у якому всі слова з великої літери записані в оберненому порядку.

const reverseWords = (str: string): string => {
	const arrayFromString = str.split(" ");
	const resultArray = arrayFromString.map((word) => {
		if (word[0] === word[0].toUpperCase()) {
			const wordToReverse = word.split("").reverse().join("");
			return wordToReverse;
		}
		return word;
	});
	const resultStr = resultArray.join(" ");
	return resultStr;
};

console.log(reverseWords("Hello World and I")); //  olleH dlroW and I

// ? 6) Створи функцію, яка приймає два аргументи - рядок та символ,
// ? і повертає кількість входжень цього символу в рядок.

const includeCalc = (string: string, symbol: string): number => {
	const arrayFromStr = string.split("");
	const result = arrayFromStr.reduce((acc, el) => {
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

const arrayUniqFilter = (array: number[]): number[] => {
	const resultArray = array.filter((el, idx, arr) => {
		return arr.indexOf(el) === idx;
	});

	return resultArray;
};

console.log(arrayUniqFilter([1, 2, 2, 3, 4, 4, 5, 5, 5])); // [1, 2, 3, 4, 5]

// ?  8) Створи функцію, яка приймає масив об'єктів з властивістю age
// ? та повертає середній вік цих об'єктів.

interface Person1 {
name: string;
age: number;
}

const middleAge = (array: Person1[]): number => {
const sumOfAge = array.reduce((acc, el) => {
return acc + el.age;
}, 0);

const quantityOfObjs = array.length;

const averageValue = sumOfAge / quantityOfObjs;

return averageValue;
};

const people: Person1[] = [
{ name: "John", age: 30 },
{ name: "Jane", age: 25 },
{ name: "Bob", age: 40 },
{ name: "Alice", age: 21 },
];

console.log(middleAge(people)); // 29


// ? 9) Створи функцію, яка приймає масив об'єктів з властивістю price
// ? та повертає найбільшу ціну з цих об'єктів.

interface ObjWithPrice {
	name: string;
	price: number;
}

const theBiggestPrice = (array: ObjWithPrice[]): number => {
	const result = array.reduce((acc, el) => {
		if (el.price > acc) {
			acc = el.price
		}
		return acc
	}, 0)
	return result
};

const items: ObjWithPrice[] = [
  { name: 'Book', price: 15 },
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 700 },
  { name: 'TV', price: 1500 },
  { name: 'Headphones', price: 200 },
];
console.log(theBiggestPrice(items)); // 1500