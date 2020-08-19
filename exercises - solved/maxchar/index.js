// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// similar questions which can be solved with same technique:
// what is most common character in a string?
// does string A have the same characters as string B (is it an anagram)?
// does given string have any repeated characters in it?

function maxChar(str) {

	//convert string to object - key(character) with values denoting count of that character
	var charMap = {};

	for (let char of str){

		if(!charMap[char]) {
			charMap[char] = 1;
		} else {
			charMap[char]++;
		}

	}

	let max = 0;
	let maxc;

	for (let x in charMap){
		if (charMap[x]>max) {
			maxc = x;
			max = charMap[x];
		}
	}

	return maxc;

}

module.exports = maxChar;
