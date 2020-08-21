// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var charMap = {};

	for (let char of str.toLowerCase()){

		if(!charMap[char]) {
			charMap[char] = 1;
		} else {
			charMap[char]++;
		}

    }
    
    return (charMap['a'] + charMap['e'] + charMap['i'] + 
    charMap['o'] + charMap['u']) || 0;
}

module.exports = vowels;


// function vowels(str, iter = 0, count = 0) {
//     if (iter===str.length){
//         return count;
//     }

//     if("aeiou".includes(str[iter].toLowerCase())) {
//         count++;
//     } 
    
//     return vowels(str, iter+1, count);
// }


// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//
//   return count;
// }


// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }