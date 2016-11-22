var ex3 = require('./ex3');

describe("containsValue", function() {

	it("test 1", function() {
		expect(ex3.containsValue([1,3,5,7,9], 8)).toBeFalsy();
	});

	it("test 2", function() {
		expect(ex3.containsValue([1,3,5,7,9], 7)).toBeTruthy();
	});

	it("test 3", function() {
		expect(ex3.containsValue([9,7,5,3,1], 7)).toBeTruthy();
	});

});

