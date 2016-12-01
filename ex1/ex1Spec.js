var ex1 = require("./ex1");

describe("getThirdCommaIndex", function() {

	it("returns -1 when no third comma", function() {
		expect(ex1.getThirdCommaIndex('hel,lowo,rld', ','))
		.toBe(-1);
	});

	it("finds a comma in a regular sentence", function() {
		expect(ex1.getThirdCommaIndex('hello,world,this,is,a,great,day', ','))
		.toBe(16);
	});

	it("works even when there are no characters beside commas", function() {
		expect(ex1.getThirdCommaIndex(',,,', ','))
		.toBe(2);
	});
});
