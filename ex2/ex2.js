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
function getTheCommaIndexAt(str, val) {
	var index = -1, returnVal = 'Error';
	for (var i = 0; i < val; i++) {
		index = str.indexOf(',',index+1);
		if (i === val-1 && index > -1) {
			return index;
		} else if (index === -1) {
			return -1;
		}
	}
	return returnVal;
}

function testFunction(str,val,msg) {
	console.log(msg, getTheCommaIndexAt(str, val));
}

testFunction('hello,world,this,is,a,great,day', 3, '16 === ');// === 16
testFunction('hello,world,this,is,a,great,day', 4, '19 === ');// === 19
testFunction(',,,', 1, '0 === ');// === 0
testFunction(',,,', 4, '-1 === ');// === -1
testFunction('hel,lowo,rld', 0, 'Throws->');// - Throws
