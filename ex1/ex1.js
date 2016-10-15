/*
 * Write a function that accepts a string and returns the index of the third comma in that string.
 * If there's no such comma, the function should return -1.
 * For example:
 *     fn("hello,world,this,is,a,great,day") === 16
 *     fn(",,,") === 2
 *     fn("hel,lowo,rld") === -1
 */

/////////////////////////////////////////////////////////////////////////////
// getThirdCommaPosition accepts a string and returns the index of the third comma in that string /  no comma return -1
function getThirdCommaPosition(str,searcVal) {

	var i, position = -1;

	for (i = 0; i < 3; i++) {
		position = str.indexOf(searcVal, position+1);
		if (position == -1) { 
			break;
		}
	}
	return position;
}

//var str = 'hello,world,this,is,a,great,day'// === 16
//var str = ',,,';// === 2
var str = 'hel,lowo,rld';// === -1

console.log(getThirdCommaPosition(str, ','));
////////////////////////////////////////////////////////////////////////////
