/**
 * Write a string splitter: given a string of comma separated values, would
 * return an array with the values.
 *
 * For example:
 * split('a,b,c') === ['a', 'b', 'c']
 * split('hello,world') === ['hello', 'world']
 * split('hello') === ['hello']
 * split('hello,,,world') === ['hello', '', '', 'world']
 * split('') === []
 */
var ex6 = require('./ex6.js');

describe("split", function() {

	it("returns 3 chracters", function() {
		expect(ex6.split('a,b,c')).toBe('a,b,c');
	});

	it("returns 2 words", function() {
		expect(ex6.split('hello,world')).toBe('hello,world');
	});

	it("returns one word", function() {
		expect(ex6.split('hello')).toBe('hello');
	});

	it("return sam words and empty index's", function() {
		expect(ex6.split('hello,,,world')).toBe('hello,,,world');		
	});

	it("returns an ampty arry", function() {
		expect(ex6.split('')).toBe('');
	});
});
