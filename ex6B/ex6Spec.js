var split = require('./ex6.js');

describe("split", function() {

	it("returns 3 elements", function() {
		expect(split('a,b,c')).toBe(['a','b','c']);
	});

	it("returns 2 words", function() {
		expect(split('hello,world')).toBe(['hello', 'world']);
	});

	it("returns one word", function() {
		expect(split('hello')).toBe(['hello']);
	});

	it("works with empty strings", function() {
		expect(split('hello,,,world')).toBe(['hello', '', '', 'world']);		
	});

	it("returns an ampty arry", function() {
		expect(split('')).toBe([]);
	});
});
