/**
 * Write a function that convers a string into number; return null if the string
 * doesn't contain a valid number.
 *
 * For example:
 * toNumber("71") === 71
 * toNumber("a7") === null
 */
function toNumber(str) {

	var strNum = '', strDec = '', number = null, i = 0, allowDot = true, negative = false;

	// Negative sige can appear only at the start of string and followed by number
	//if (str.slice(0, 1) === '-' && isNumber(str.slice(1, 2))) {
	
	if (str.charAt(0) === '-' ) {
		
		if (isNumber(str.charAt(1))) {

			negative = true;  
			i = 1;

		} else {
		
			return null;
		}
	}

	// Dot cannot appear at the start or at the end of string
	if (str[0] === '.' || str[str.length - 1]=== '.') {
		return null;
	}

	for (;i < str.length; i++) {

		if (isNumber(str.charAt(i)) ||  str.charAt(i) === '.' && allowDot) {
 
			// Zero tolerance for dots
			if (str.charAt(i) === '.') {

				allowDot = false;
				continue;
			}

			if (!allowDot) {

				strDec += str.charAt(i);  

			} else {

				strNum += str.charAt(i);  
			}

		} else {

			return null;

		}
	}

	number = strToNumber(strNum) + strToDec("0"+strDec);

	if (negative === true) {

		number = -1 * number;

	}

	return number;
}

function strToNumber(str) {

	var num = 0;

	for (var i = 0; i < str.length; i++) { 
		num = num * 10;
		num += str[i].charCodeAt() - 48;
	}
	return num;
}

function strToDec(str) {

	var num = 0;

	for (var i = str.length; i > 0; i--) { 
		num = num  / 10;
		num += str[i-1].charCodeAt() - 48;
	}
	return num;
}

function isNumber(val) {

	if (val >= 0 && val <= 9) {
		return true;
	} else {
		return false;
	}

}

module.exports = toNumber;
