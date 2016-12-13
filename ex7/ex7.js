/**
 * mostFrequentChar returns the character that repeats itself the most in str. 
 * If there isn't one, returns null.
 *
 * For example:
 * mostFrequentChar("zuriel yahav") === "a"
 * mostFrequentChar("ohad kravchick") === null // a, c, k all show up twice
 * mostFrequentChar("dana kravchick") === "a"
 * mostFrequentChar("a b c d e f") === " "
 * mostFrequentChar("") === null
 */

function mostFrequentChar(str) {

	objCharCount = {};

	if (str === '') {
		return null;
	}

	objCharCount = countChar(str);

	return getFrequentChar(objCharCount);
}

function getFrequentChar(objCharCount) {
	
	var maxCount = 0,
	  frequentChar = null,
	  frequentCount = 0,
	  arrayChar = [],
	  currentCount = 0,
	  currentChar = '';

	arrayChar = Object.keys(objCharCount);

	for (var i = 0; i < arrayChar.length; i++) {

		currentChar = arrayChar[i];
		currentCount = objCharCount[currentChar];

		if (maxCount < currentCount) {

			maxCount = currentCount;
			frequentChar = currentChar;

		} else if (maxCount === currentCount) {

			frequentChar = null;

		}
	}
	return frequentChar;
}

function countChar(str) { 

	var objCharCount = {};

	for (var i = 0; i < str.length; i++) {

		// The char we are now working on
		currentChar = str.charAt(i); 
		
		if (objCharCount[currentChar] === undefined) {

			objCharCount[currentChar] = 1;

		} else {

			objCharCount[currentChar] = objCharCount[currentChar] += 1;

		}
	}
	return objCharCount;
}

module.exports = mostFrequentChar; 
