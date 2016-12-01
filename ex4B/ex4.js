/**
 * Write a function that convers a string into number; return null if the string
 * doesn't contain a valid number.
 *
 * For example:
 * toNumber("71") === 71
 * toNumber("a7") === null
 */
function toNumber(str) {

	var tmpStr = '', i = 0, dotRepeat = null;

	// Negative sine can appear only at the start of string and followed by number
	if (str.slice(i, i + 1) === '-' && isNumber(str.slice(i+1, i + 2))) {
	
		tmpStr += str.slice(i, i + 2);  
		i = 2;
	}

	// Dot cannot appear at the start or and of string
	if (str[0] === '.' || str[str.length - 1]=== '.') {
		return null;
	}

	for (;i < str.length; i++) {

		if (isNumber(str.slice(i, i + 1)) ||  str.slice(i, i + 1) === '.' && !dotRepeat) {
 
			// Ziro tolerants for dots
			if (str.slice(i, i + 1) === '.') {
				dotRepeat = true;
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
