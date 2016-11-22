/**
 * Write a function that given a string, returns the first character that
 * doesn't repeat in the whole string. Otherwise (all characters repeat),
 * should return null.
 *
 * For example:
 * ex5.firstUniqueChar("abcdedcba") === "e"
 * ex5.firstUniqueChar("abcdeedcba") === null
 * ex5.firstUniqueChar("abababcab") === "c"
 * ex5.firstUniqueChar("aaaaaaaaa") === null
 * ex5.firstUniqueChar("a") === "a"
 */

var ex5 = require('./ex5.js');

describe("firstUniqueChar", function() {
	it("finds 'e' as the first character in the string", function() {
		expect(ex5.firstUniqueChar("abcdedcba")).toBe("e");
	});

	it("return null, we do not have a uniq char on string", function() {
		expect(ex5.firstUniqueChar("abcdeedcba")).toBeNull();
	});

	it("finds 'c' as the first character in the string", function() {
		expect(ex5.firstUniqueChar("abababcab")).toBe("c");
	});

	it("return null, all chars in string are same", function() {
		expect(ex5.firstUniqueChar("aaaaaaaaa")).toBeNull();
	});

	it("finds 'a' as the first character in the strin", function() {
		expect(ex5.firstUniqueChar("a")).toBe("a");
	});
});
