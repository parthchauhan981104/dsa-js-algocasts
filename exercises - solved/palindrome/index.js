// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

	return str.split('').every((char, index) => {
		return char === str[str.length - index - 1];
	})

	// // Or
	// var len = str.length;
	// for(var i=0; i<len/2; i++) {
	// 	if(str[i] !== str[len-i-1]){
	// 		return false;
	// 	}
	// }
	// return true;

	// //Or
	// return str == str.split('').reverse().join('');
}


module.exports = palindrome;
