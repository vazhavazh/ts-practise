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
			acc = el.price;
		}
		return acc;
	}, 0);
	return result;
};

const items: ObjWithPrice[] = [
	{ name: "Book", price: 15 },
	{ name: "Laptop", price: 1000 },
	{ name: "Smartphone", price: 700 },
	{ name: "TV", price: 1500 },
	{ name: "Headphones", price: 200 },
];
console.log(theBiggestPrice(items)); // 1500

// ? 10) Створи функцію, яка приймає масив об'єктів з властивістю name та повертає новий масив,
//  ? який містить тільки ті об'єкти, в яких ім'я починається з певної літери.

interface objWithName {
	name: string;
	age: number;
}

const arrayFilterName = (
	array: objWithName[],
	startLetter: string
): objWithName[] => {
	const result = array.filter((el) => {
		return el.name.startsWith(startLetter);
	});

	return result;
};

const people1: objWithName[] = [
	{ name: "John", age: 25 },
	{ name: "Jane", age: 30 },
	{ name: "Bob", age: 40 },
	{ name: "Alice", age: 21 },
];

console.log(arrayFilterName(people1, "J"));

// ? 11) Створи функцію, яка приймає масив чисел та повертає новий масив,
// ? в якому кожен елемент є квадратом відповідного елемента вхідного масиву.

const squaredArray = (array: number[]): number[] => {
	const result = array.map((el) => {
		const square = el ** 2;
		return square;
	});
	return result;
};

const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

console.log(squaredArray(arrayOfNumbers));

// ? 12) Створи функцію, яка приймає рядок та повертає новий рядок,
// ? в якому кожна літера перетворена на відповідну їй цифру в ASCII таблиці charCodeAt()

const stringToCodeTranslator = (str: string): string => {
	const arr: string[] = str.split("");
	const codesInArr: number[] = arr.map((el) => el.charCodeAt(0));
	const resultStr = codesInArr.join("");
	return resultStr;
};

console.log(stringToCodeTranslator("Olga")); // "7910810397"

// ?? 13) Створи функцію, яка приймає масив чисел та повертає новий масив,
// ?? який містить тільки непарні числа з вхідного масиву.

const odding = (arr: number[]): number[] => {
	const newArr = arr.filter((el) => el % 2 !== 0);
	return newArr;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(odding(numbers)); // [1, 3, 5, 7, 9]

// ?? 14) Створи функцію, яка приймає два масиви та повертає новий масив,
// ?? який містить всі елементи першого масиву, які не зустрічаються в другому масиві.

const arrChecker = (arr1: any[], arr2: any[]): any[] => {
	const result = arr1.filter((el1) => !arr2.includes(el1));
	return result;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log(arrChecker(arr1, arr2)); // [1, 2]

// ?? 15) Створи функцію, яка приймає масив об'єктів та повертає новий масив,
// ?? який містить тільки ті об'єкти з вхідного масиву,
// ?? які мають властивість age більшу або дорівнює заданому значенню.

const AGE = 18;

interface TestObj {
	name: string;
	age: number;
}
const ageFilter = (arr: TestObj[]): TestObj[] => {
	const result = arr.filter((el) => el.age >= 18);
	return result;
};

const arr = [
	{ name: "Alice", age: 20 },
	{ name: "Bob", age: 25 },
	{ name: "Charlie", age: 18 },
	{ name: "Dave", age: 16 },
];

console.log(ageFilter(arr));

// ?? 16) Створи функцію, яка приймає рядок та повертає новий рядок,
// ?? який містить тільки унікальні символи з вхідного рядка,
// ?? в тому ж порядку, в якому вони зустрічаються в оригінальному рядку

const uniqString = (str: string): string => {
	const arr = str.split("");
	const filteredArr = arr.filter((el, idx, arr) => arr.indexOf(el) === idx);
	const result = filteredArr.join("");
	return result;
};

console.log(uniqString("abbcddeff")); // abcdef
console.log(uniqString("Hello, world!")); // Helo, wrd!

//  ?? 17) Напиши функцію,
// ?? яка приймає масив і повертає останній елемент масиву.
// ?? Якщо масив порожній, функція повертає null.

const lastEl = (arr: any[]): any => {
	const copy = [...arr];
	if (copy.length === 0) {
		return null;
	}
	const lastEl = copy.pop();
	return lastEl;
};

console.log(lastEl([1, 2, 3, 4, 5])); // 5
console.log(lastEl([])); // null
console.log(lastEl(["hello", "world"])); // "world"

//  ?? 18) Напиши функцію, яка приймає два масиви і повертає новий масив,
// ?? в якому елементи - це сума елементів з однаковими індексами у вхідних масивах.

const sumOfSameIndex = (arr1: number[], arr2: number[]): number[] => {
	let resultArray: number[] = [];

	for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
		const newEl = arr1[i] + arr2[i];
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

const squareAndSort = (arr: number[]): number[] => {
	const squaredCopy = arr.map((el) => el ** 2);
	const resultArr = squaredCopy.sort((a, b) => a - b);
	return resultArr;
};

const arr3 = [3, -1, 0, 2, 4];
console.log(squareAndSort(arr3)); // [0, 1, 4, 9, 16]

// ?? 20) Напиши функцію, яка приймає рядок як аргумент ,
// ?? та повертає кількість голосних літер у рядку.

const countVowels = (str: string): number => {
	const arrOfVowels: string[] = ["a", "e", "i", "o", "u"];

	const arrFromString = str.toLowerCase().split("");
	const result = arrFromString.reduce((acc, el) => {
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

const multiPlyEl = (arr: number[]): number[] => {
	const result = arr.map((el) => el * 2);
	return result;
};

const arr4: number[] = [1, 2, 3, 4, 5];

console.log(multiPlyEl(arr4)); //

// ?? 22) Створи функцію, яка приймає масив рядків та повертає новий масив,
// ??  який містить тільки ті рядки, які містять більше 5 символів.

const arrFilter = (arr: string[]): string[] => {
	const result = arr.filter((el) => el.length > 5);
	return result
};
console.log(arrFilter(["hello", "world", "goodbye", "nice", "to", "meet", "you"])); // ["goodbye", "meet"]
console.log(arrFilter(["abc", "def", "ghijkl", "mno"])); // ["ghijkl"]
console.log(arrFilter([])); // []


// ?? 23) Створи функцію, яка приймає масив рядків та повертає новий масив,
// ??  який містить тільки рядки, що починаються з великої літери.

const filterByUpperCase = (arr: string[]): string[] => {
	const result = arr.filter((el) => el[0] === el[0].toUpperCase());
	return result;
};

console.log(filterByUpperCase(['Apple', 'banana', 'Cherry', 'Date'])); // ['Apple', 'Cherry', 'Date']

// ?? 24) Створи функцію, яка приймає масив рядків та повертає новий масив,
// ?? який містить тільки рядки, які містять підрядок "JS".

const arrFilter4 = (arr: string[]): string[] => {
	const result = arr.filter((el) => {
		if (el === '') {
			return
		}
	return el.includes('JS')
	})
	return result
}

console.log(arrFilter4(['JavaScript', 'TypeScript', 'Python', 'JS'])); // ['JS']
console.log(arrFilter4(['Hello', '', 'JS World'])); // ['JS World']
console.log(arrFilter4(['JS', 'js', ''])); // ['JS']