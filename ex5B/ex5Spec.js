var ex5 = require('./ex5.js');

describe("firstUniqueChar", function() {
	it("finds another unique character in the string", function() {
		expect(ex5.firstUniqueChar("abcdedcba")).toBe("e");
	});

	it("return null when we only have one [non-unique] char", function() {
		expect(ex5.firstUniqueChar("abcdeedcba")).toBeNull();
	});

	it("finds another unique character in the string", function() {
		expect(ex5.firstUniqueChar("abababcab")).toBe("c");
	});

	it("return null, all chars are same, function() {
		expect(ex5.firstUniqueChar("aaaaaaaaa")).toBeNull();
	});

	it("works for a single character", function() {
		expect(ex5.firstUniqueChar("a")).toBe("a");
	});
});
