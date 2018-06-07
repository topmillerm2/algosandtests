// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;

// function maxChar(str) {
// 	str.split('');

// 	let obj = {};
// 	for (let character in str) {
// 		if (obj[str[character]]) {
// 			obj[str[character]] += 1;
// 		} else {
// 			obj[str[character]] = 1;
// 		}
// 	}
// 	console.log(obj);

// 	let maxChar = '';
// 	let maxVal = 0;
// 	for (let key in obj) {
// 		if (obj[key] > maxVal) {
// 			maxVal = obj[key];
// 			maxChar = key;
// 		}
// 	}
// 	return maxChar;
// }
