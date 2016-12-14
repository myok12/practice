var toNumber = require('./ex4.js');

describe("function toNumber", function() {

	///////////////////////////////////////////////////////////////////////	
	// Numbers
	it("converts single digit", function() {
		expect(toNumber("5")).toBe(5);
	});
	
	it("converts 2 digits", function() {
		expect(toNumber("71")).toBe(71);
	});

	it("converts many digits", function() {
		expect(toNumber("712387328182")).toBe(712387328182);
	});
	
	///////////////////////////////////////////////////////////////////////	
	// Negative numbers 
	it("converts a negative single-digit number", function() {
		expect(toNumber("-3")).toBe(-3);
	});

	it("converts a negative 2-digits number", function() {
		expect(toNumber("-32")).toBe(-32);
	});

	it("converts many netgative digits", function() {
		expect(toNumber("-712387328182")).toBe(-712387328182);
	});

	it("return null, single digit. negative sign cannot be last", function() {
		expect(toNumber("3-")).toBeNull();
	});

	it("return null, 2 digits. negative sign cannot be last", function() {
		expect(toNumber("32-")).toBeNull();
	});

	it("return null, many digits. negative sign cannot be last ", function() {
		expect(toNumber("712387328182-")).toBeNull();
	});

	it("return null, many digits. negative sign in the middle", function() {
		expect(toNumber("71238-328182")).toBeNull();
	});
	
	///////////////////////////////////////////////////////////////////////	
	// Decimal
	it("converts decimal", function() {
		expect(toNumber("0.6")).toBe(0.6);
	});

	it("converts decimal 2 digits", function() {
		expect(toNumber("10.67")).toBe(10.67);
	});

	it("converts many decimal", function() {
		expect(toNumber("78780.712387328182")).toBe(78780.712387328182);
	});

	it("return null, decimal. dot cannot be the first sign", function() {
		expect(toNumber(".6")).toBeNull();
	});

	it("return null, decimal. dot cannot be the last sign", function() {
		expect(toNumber("6.")).toBeNull();
	});

	it("return null, decimal 2 digits. dot cannot be the first sign", function() {
		expect(toNumber(".68")).toBeNull();
	});

	it("return null, decimal 2 digits. dot cannot be the last sign", function() {
		expect(toNumber("68.")).toBeNull();
	});

	it("return null, decimal many digits. dot cannot be the first sign", function() {
		expect(toNumber(".87886")).toBeNull();
	});

	it("return null, decimal many digits. dot cannot be the last sign", function() {
		expect(toNumber("88786.")).toBeNull();
	});
	///////////////////////////////////////////////////////////////////////	
	// Decimal negative
	it("converts decimal and negative", function() {
		expect(toNumber("-0.6")).toBe(-0.6);
	});

	it("converts 2 digits. decimal and negative", function() {
		expect(toNumber("-10.62")).toBe(-10.62);
	});

	it("converts many digits. negative and decimal", function() {
		expect(toNumber("-343.533")).toBe(-343.533);
	});

	it("return null, decimal and negative. negative and dot cannot be the first sign", function() {
		expect(toNumber("-.6")).toBeNull();
	});

	it("return null, decimal and negative 2 digits. negative and dot cannot be the first sign", function() {
		expect(toNumber("-.62")).toBeNull();
	});

	it("return null, negative and decimal many digits. negative and dot cannot be the first sign", function() {
		expect(toNumber("-.53233")).toBeNull();
	});

	it("return null, decimal and negative many digits. dot and negative cannot be the first sign", function() {
		expect(toNumber(".-53233")).toBeNull();
	});
	///////////////////////////////////////////////////////////////////////	
	// Character
	it("returns null, input a single char", function() {
		expect(toNumber("a")).toBeNull();
	});

	it("returns null, input single number and a single char", function() {
		expect(toNumber("7a")).toBeNull();
	});

	it("returns null, input many single characters", function() {
		expect(toNumber("akjadiaoihdsaoi")).toBeNull();
	});

	it("returns null, input many single characters", function() {
		expect(toNumber("''")).toBeNull();
	});

	///////////////////////////////////////////////////////////////////////	
	// Negative sign
	it("returns null, negative sign cannot appear at start and end of input", function() {
		expect(toNumber("-4-")).toBeNull();
	});

	it("return null, negative sign cannot appear more then once", function() {
		expect(toNumber("--4")).toBeNull();
	});

	it("return null, negative sign cannot appear in middle of input", function() {
		expect(toNumber("4-4-4")).toBeNull();
	});
	
	///////////////////////////////////////////////////////////////////////	
	// Dot sign
	it("returns null, dot cannot appear more than once in middle of input", function() {
		expect(toNumber("4.4.4")).toBeNull();
	});

});
