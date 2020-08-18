// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	s='';
	for(x of str){
		s = x + s;
	}
	return s;

	// //Or
	// s=str.split('');
	// return s.reverse().join('');
	
	// //Or
	// s=str.split('');
	// return s.reduce((reversed, character) => character + reversed, '');

}

module.exports = reverse;
// console.log(reverse(' abcd'));
