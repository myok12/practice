/*
 * Write a function that accepts a string and a number (n) and returns the index of the n-th comma in that string.
 * If there's no such comma, the function should return -1. If the n argument is invalid, the function should throw an Error.
 * For example:
 *     fn("hello,world,this,is,a,great,day", 3) === 16
 *     fn("hello,world,this,is,a,great,day", 4) === 19
 *     fn(",,,", 1) === 0
 *     fn(",,,", 4) === -1
 *     fn("hel,lowo,rld", 0) - Throws
 */
function getTheCommaIndexAt(str, commaIndex) {

	if (commaIndex <= 0) {
		throw new RangeError('Invalid # of comma');
	}

	var index = -1;

	for (var i = 0; i < commaIndex; i++) {

		index = str.indexOf(',',index + 1);

		//  If indexOf return -1 no comma found so break and return -1
		//  If it is the commaIndex value and greater than -1
		if (i === (commaIndex - 1) || index === -1) {
			break;
		}
	}
	return index;
}

module.exports = getTheCommaIndexAt;
