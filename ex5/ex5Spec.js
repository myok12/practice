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

	it("3 I do not know what to...", function() {
		expect(ex5.firstUniqueChar("abcdeedcba")).toBeNull();
	});

	it("4 I do not know what to...", function() {
		expect(ex5.firstUniqueChar("abababcab")).toBe("c");
	});

	it("5 I do not know what to...", function() {
		expect(ex5.firstUniqueChar("aaaaaaaaa")).toBeNull();
	});

	it("6 I do not know what to...", function() {
		expect(ex5.firstUniqueChar("a")).toBe("a");
	});
});
