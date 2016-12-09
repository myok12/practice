var firstUniqueChar = require('./ex5.js');

describe("function firstUniqueChar", function() {
	it("finds another unique character e in the string", function() {
		expect(firstUniqueChar("abcdedcba")).toBe("e");
	});

	it("return null, all chars are duplicated", function() {
		expect(firstUniqueChar("abcdeedcba")).toBeNull();
	});

	it("finds another unique character e in the string", function() {
		expect(firstUniqueChar("abababcab")).toBe("c");
	});

	it("return null, all chars are same", function() {
		expect(firstUniqueChar("aaaaaaaaa")).toBeNull();
	});
	it("works on really long strings", function() {
		var longString = '';
		for (i=100;i<100000;i++) {
			longString += String.fromCharCode(i);
		}
		firstUniqueChar(longString);
	});

	it("works for a single character", function() {
		expect(firstUniqueChar("a")).toBe("a");
	});
});
