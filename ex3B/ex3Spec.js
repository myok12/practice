var containsValue = require('./ex3');

describe("containsValue", function() {

	it("should not find the number 8 in array", function() {
		expect(containsValue([1,3,5,7,9], 8)).toBeFalsy();
	});

	it("should find the number 7 in array", function() {
		expect(containsValue([1,3,5,7,9], 7)).toBeTruthy();
	});

	it("should find the number 7 in array", function() {
		expect(containsValue([9,7,5,3,1], 7)).toBeTruthy();
	});
});
