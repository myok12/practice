var firstUniqueChar = require('./ex5.js');

describe("function firstUniqueChar", function() {
	it("finds another unique character e in the string", function() {
		expect(firstUniqueChar("abcdedcba")).toBe("e");
	});

	it("return null when we only have one [non-unique] char", function() {
		expect(firstUniqueChar("abcdeedcba")).toBeNull();
	});

	it("finds another unique character e in the string", function() {
		expect(firstUniqueChar("abababcab")).toBe("c");
	});

	it("return null, all chars are same", function() {
		expect(firstUniqueChar("aaaaaaaaa")).toBeNull();
	});

	it("works for a single character", function() {
		expect(firstUniqueChar("a")).toBe("a");
	});
});
