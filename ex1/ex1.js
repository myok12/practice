/*
 * Write a function that accepts a string and returns the index of the third comma in that string.
 * If there's no such comma, the function should return -1.
 * For example:
 *     fn("hello,world,this,is,a,great,day") === 16
 *     fn(",,,") === 2
 *     fn("hel,lowo,rld") === -1
 */

/////////////////////////////////////////////////////////////////////////////
// getThirdCommaIndex accepts a string and returns the index of the third comma in that string if no comma return -1
function getThirdCommaIndex(str,searcFor) {

        var index = -1;

	for (let i = 0; i < 3; i++) {
		index = str.indexOf(searcFor, index+1);
		if (index == -1) { 
			break;
		}
	}
	return index;
}

function testFunction(str) {

	console.log(getThirdCommaIndex(str, ','));
}

testFunction('hel,lowo,rld');// === -1
testFunction('hello,world,this,is,a,great,day');// === 16
testFunction(',,,');// === 2
