var getThirdCommaIndex = require("./ex1");

describe("function getThirdCommaIndex", function() {

	it("returns -1 when no third comma", function() {
		expect(getThirdCommaIndex('hel,lowo,rld', ','))
		.toBe(-1);
	});

	it("finds a comma in a regular sentence", function() {
		expect(getThirdCommaIndex('hello,world,this,is,a,great,day', ','))
		.toBe(16);
	});

	it("works even when there are no characters beside commas", function() {
		expect(getThirdCommaIndex(',,,', ','))
		.toBe(2);
	});
});
