/*
 * Write a function that accepts a string and returns the index of the third comma in that string.
 * If there's no such comma, the function should return -1.
 * For example:
 *     fn("hello,world,this,is,a,great,day") === 16
 *     fn(",,,") === 2
 *     fn("hel,lowo,rld") === -1
 */

/////////////////////////////////////////////////////////////////////////////
// Accepts a string and returns the index of the third comma in that string if no comma return -1
//
function getThirdCommaIndex(str,searchFor) {
	//
	// I DO NOT KNOW HOW TO REMOVE  THE -1
	//
        var index = -1;

	for (var i = 0; i < 3; i++) {

		index = str.indexOf(searchFor, index + 1);

		//  If we did not find a comma in str will stop search
		if (index == -1) { 
			break;
		}
	}
	return index;
}


describe("getThirdCommaIndex", function() {


	it("hel,lowo,rld", function() {
		expect(getThirdCommaIndex('hel,lowo,rld', ',')).toBe(-1);
	});

	it("hello,world,this,is,a,great,day", function() {
		expect(getThirdCommaIndex('hello,world,this,is,a,great,day', ',')).toBe(16);
	});

	it(",,,", function() {
		expect(getThirdCommaIndex(',,,', ',')).toBe(2);
	});
});
