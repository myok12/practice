var ex4 = require('./ex4.js');

describe("toNumber", function() {

	///////////////////////////////////////////////////////////////////////	
	// Numbers
	it("converts single digit", function() {
		expect(ex4.toNumber("5")).toBe(5);
	});
	
	it("converts 2 digits", function() {
		expect(ex4.toNumber("71")).toMatch(71);
	});

	it("converts many digits", function() {
		expect(ex4.toNumber("712387328182")).toMatch(712387328182);
	});
	
	///////////////////////////////////////////////////////////////////////	
	// Numbers negative
	it("converts a single negative digit", function() {
		expect(ex4.toNumber("-3")).toBe(-3);
	});

	it("converts a negative 2 digits", function() {
		expect(ex4.toNumber("-32")).toBe(-32);
	});

	it("converts many netgative digits", function() {
		expect(ex4.toNumber("-712387328182")).toMatch(712387328182);
	});

	it("return null, single digit. negative sine cannot be last", function() {
		expect(ex4.toNumber("3-")).toBeNull();
	});

	it("return null, 2 digits. negative sine cannot be last", function() {
		expect(ex4.toNumber("32-")).toBeNull();
	});

	it("return null, many digits. negative sine cannot be last ", function() {
		expect(ex4.toNumber("712387328182-")).toBeNull();
	});

	///////////////////////////////////////////////////////////////////////	
	// Decimal
	it("converts decimal", function() {
		expect(ex4.toNumber("0.6")).toBe(0.6);
	});

	it("converts decimal 2 digits", function() {
		expect(ex4.toNumber("10.67")).toBe(10.67);
	});

	it("converts many decimal", function() {
		expect(ex4.toNumber("78780.712387328182")).toMatch(78780.712387328182);
	});

	it("return null, decimal. dot cannot be the first sine", function() {
		expect(ex4.toNumber(".6")).toBeNull();
	});

	it("return null, decimal. dot cannot be the last sine", function() {
		expect(ex4.toNumber("6.")).toBeNull();
	});

	it("return null, decimal 2 digits. dot cannot be the first sine", function() {
		expect(ex4.toNumber(".68")).toBeNull();
	});

	it("return null, decimal 2 digits. dot cannot be the last sine", function() {
		expect(ex4.toNumber("68.")).toBeNull();
	});

	it("return null, decimal many digits. dot cannot be the first sine", function() {
		expect(ex4.toNumber(".87886")).toBeNull();
	});

	it("return null, decimal many digits. dot cannot be the last sine", function() {
		expect(ex4.toNumber("88786.")).toBeNull();
	});
	///////////////////////////////////////////////////////////////////////	
	// Decimal negative
	it("converts decimal and negative", function() {
		expect(ex4.toNumber("-0.6")).toBe(-0.6);
	});

	it("converts 2 digits. decimal and negative", function() {
		expect(ex4.toNumber("-10.62")).toBe(-10.62);
	});

	it("converts many digits. negative and decimal", function() {
		expect(ex4.toNumber("-343.533")).toBe(-343.533);
	});

	it("return null, decimal and negative. negative and dot cannot be the first sine", function() {
		expect(ex4.toNumber("-.6")).toBeNull();
	});

	it("return null, decimal and negative 2 digits. negative and dot cannot be the first sine", function() {
		expect(ex4.toNumber("-.62")).toBeNull();
	});

	it("creturn null, decimal and negative many digits. negative and dot cannot be the first sine", function() {
		expect(ex4.toNumber("-.53233")).toBeNull();
	});

	///////////////////////////////////////////////////////////////////////	
	// Character
	it("returns null, input a single char", function() {
		expect(ex4.toNumber("a")).toBeNull();
	});

	it("returns null, input single number and a single char", function() {
		expect(ex4.toNumber("7a")).toBeNull();
	});

	it("returns null, input many single characters", function() {
		expect(ex4.toNumber("akjadiaoihdsaoi")).toBeNull();
	});

	///////////////////////////////////////////////////////////////////////	
	// Negative sine
	it("returns null, negative cannot appear more than once", function() {
		expect(ex4.toNumber("-4-")).toBeNull();
	});

	it("return null, negative sine cannot appear more then once", function() {
		expect(ex4.toNumber("--4")).toBeNull();
	});

	///////////////////////////////////////////////////////////////////////	
	// Dot sine
	it("returns null, dot cannot appear more than once in middle of string", function() {
		expect(ex4.toNumber("4.4.4")).toBeNull();
	});

});
