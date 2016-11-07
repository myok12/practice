/**
 * Write a function that convers a string into number; return null if the string
 * doesn't contain a valid number.
 *
 * For example:
 * toNumber("71") === 71
 * toNumber("a7") === null
 */
function toNumber(str) {

	let tmpStr = '';

	for (let i = 0; i < str.length; i++) {

		if (str.slice(i,i+1) >= 0 && str.slice(i,i+1) <= 9) {

			tmpStr += str.slice(i,i+1);  

		} else {

			return null;

		}
	}

	return Number(tmpStr);
}

function testFn(str) {

	console.assert(toNumber(str) !== null, toNumber(str));
}

testFn("71");
testFn("7a");


