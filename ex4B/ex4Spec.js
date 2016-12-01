var toNumber = require('./ex4.js');

describe("function toNumber", function() {

	///////////////////////////////////////////////////////////////////////	
	// Numbers
	it("converts single digit", function() {
		expect(toNumber("5")).toBe(5);
	});
	
	it("converts 2 digits", function() {
		expect(toNumber("71")).toMatch(71);
	});

	it("converts many digits", function() {
		expect(toNumber("712387328182")).toMatch(712387328182);
	});
	
	///////////////////////////////////////////////////////////////////////	
	// Numbers negative
	it("converts a single negative digit", function() {
		expect(toNumber("-3")).toBe(-3);
	});

	it("converts a negative 2 digits", function() {
		expect(toNumber("-32")).toBe(-32);
	});

	it("converts many netgative digits", function() {
		expect(toNumber("-712387328182")).toMatch(712387328182);
	});

	it("return null, single digit. negative sine cannot be last", function() {
		expect(toNumber("3-")).toBeNull();
	});

	it("return null, 2 digits. negative sine cannot be last", function() {
		expect(toNumber("32-")).toBeNull();
	});

	it("return null, many digits. negative sine cannot be last ", function() {
		expect(toNumber("712387328182-")).toBeNull();
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
		expect(toNumber("78780.712387328182")).toMatch(78780.712387328182);
	});

	it("return null, decimal. dot cannot be the first sine", function() {
		expect(toNumber(".6")).toBeNull();
	});

	it("return null, decimal. dot cannot be the last sine", function() {
		expect(toNumber("6.")).toBeNull();
	});

	it("return null, decimal 2 digits. dot cannot be the first sine", function() {
		expect(toNumber(".68")).toBeNull();
	});

	it("return null, decimal 2 digits. dot cannot be the last sine", function() {
		expect(toNumber("68.")).toBeNull();
	});

	it("return null, decimal many digits. dot cannot be the first sine", function() {
		expect(toNumber(".87886")).toBeNull();
	});

	it("return null, decimal many digits. dot cannot be the last sine", function() {
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

	it("return null, decimal and negative. negative and dot cannot be the first sine", function() {
		expect(toNumber("-.6")).toBeNull();
	});

	it("return null, decimal and negative 2 digits. negative and dot cannot be the first sine", function() {
		expect(toNumber("-.62")).toBeNull();
	});

	it("creturn null, decimal and negative many digits. negative and dot cannot be the first sine", function() {
		expect(toNumber("-.53233")).toBeNull();
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

	///////////////////////////////////////////////////////////////////////	
	// Negative sine
	it("returns null, negative sine cannot appear at start and end of input", function() {
		expect(toNumber("-4-")).toBeNull();
	});

	it("return null, negative sine cannot appear more then once", function() {
		expect(toNumber("--4")).toBeNull();
	});

	it("return null, negative sine cannot appear in middle of input", function() {
		expect(toNumber("4-4-4")).toBeNull();
	});
	
	///////////////////////////////////////////////////////////////////////	
	// Dot sine
	it("returns null, dot cannot appear more than once in middle of input", function() {
		expect(toNumber("4.4.4")).toBeNull();
	});

});
