/**
 * Write a function that convers a string into number; return null if the string
 * doesn't contain a valid number.
 *
 * For example:
 * toNumber("71") === 71
 * toNumber("a7") === null
 */
function toNumber(str) {

	var tmpStr = '', i = 0, allowDot = true;

	// Negative sige can appear only at the start of string and followed by number
	//if (str.slice(0, 1) === '-' && isNumber(str.slice(1, 2))) {
	
	if (str.charAt(0) === '-' && isNumber(str.charAt(1))) {
		tmpStr += str.slice(0, 2);  
		i = 2;
	}

	// Dot cannot appear at the start or at the end of string
	if (str[0] === '.' || str[str.length - 1]=== '.') {
		return null;
	}

	for (;i < str.length; i++) {

		if (isNumber(str.slice(i, i + 1)) ||  str.slice(i, i + 1) === '.' && allowDot) {
 
			// Zero tolerance for dots
			if (str.slice(i, i + 1) === '.') {
				allowDot = false;
			} 
			tmpStr += str.slice(i, i + 1);  

		} else {

			return null;

		}
	}

	return Number(tmpStr);
}


function isNumber(val) {

	if (val >= 0 && val <= 9) {
		return true;
	} else {
		return false;
	}

}

module.exports = toNumber;
