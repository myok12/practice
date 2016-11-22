var ex4 = require('./ex4.js');

describe("toNumber", function() {

	it("converte 71 string  to an 71 number", function() {
		expect(ex4.toNumber("71")).toMatch(71);
	});

	it("return null if the string dosnt contain a valid number", function() {
		expect(ex4.toNumber("7a")).toBeNull();
	});

});

