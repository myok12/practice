var ex2 = require('./ex2.js');

describe("getTheCommaIndexAt", function(){

	it("finds the 3th comma in astring", function(){
		expect(ex2.getTheCommaIndexAt('hello,world,this,is,a,great,day', 3)).toBe(16);
	});

	it("finds the 19th comma in a string", function(){
		expect(ex2.getTheCommaIndexAt('hello,world,this,is,a,great,day', 4)).toBe(19);
	});

	it("finds the 1th comma in a string", function(){
		expect(ex2.getTheCommaIndexAt(',,,', 1)).toBe(0);
	});

	it("finds the 4th comma in a string", function(){		
		expect(ex2.getTheCommaIndexAt(',,,', 4)).toBe(-1);
	});

	it("throw an Error if the n argument is invalid", function(){
		expect(function() { 
			ex2.getTheCommaIndexAt(',,,', 0); 
		}).toThrow('Throws...');
	});
});
