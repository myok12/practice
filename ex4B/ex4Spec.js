var ex4 = require('./ex4.js');

describe("toNumber", function() {

	it("converte the chacter 7 & 1 string  to a number 71", function() {
		expect(ex4.toNumber("71")).toMatch(71);
	});

	it("return null, string doesn't contain a valid number", function() {
		expect(ex4.toNumber("7a")).toBeNull();
	});
});
