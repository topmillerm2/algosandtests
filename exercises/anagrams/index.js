// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str){
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;

//my original solution

// function anagrams(stringA, stringB) {
// 	//(/[^]/g, "").toLowerCase()
// 	stringA.replace(/[^\w]/g, '').toLowerCase();
// 	stringB.replace(/[^\w]/g, '').toLowerCase();

// 	let objA = {};
// 	let objB = {};

// 	for (let char of stringA) {
// 		if (objA[char]) {
// 			objA[char]++;
// 		} else {
// 			objA[char] = 1;
// 		}
// 	}
// 	for (let char of stringB) {
// 		if (objB[char]) {
// 			objB[char]++;
// 		} else {
// 			objB[char] = 1;
// 		}
// 	}
// 	console.log(objA);
// 	console.log(objB);
// 	let anagram = true
// 	for (let key in objA) {
// 		if (objA[key] !== objB[key]) {
// 			anagram = false
// 		} else continue;
// 	}
// 	return anagram
// }

//1st solution

// function anagrams(stringA, stringB) {
// 	const aCharMap = buildCharMap(stringA)
// 	const bCharMap = buildCharMap(stringB)

// 	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
// 		return false;
// 	}
// 	for (let char in aCharMap) {
// 		if (aCharMap[char] !== bCharMap[char]) {
// 			return false;
// 		}
// 	}

// 	return true
// }

// function buildCharMap(str) {
// 	const charMap = {};

// 	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}

// 	return charMap;
// }
