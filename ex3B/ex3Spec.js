var ex3 = require('./ex3');

describe("containsValue", function() {

	it("shoud not find the number 8 in array", function() {
		expect(ex3.containsValue([1,3,5,7,9], 8)).toBeFalsy();
	});

	it("shoud find the number 7 in array", function() {
		expect(ex3.containsValue([1,3,5,7,9], 7)).toBeTruthy();
	});

	it("shoud find the number 7 in array", function() {
		expect(ex3.containsValue([9,7,5,3,1], 7)).toBeTruthy();
	});
});
