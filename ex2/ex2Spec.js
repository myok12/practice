var getTheCommaIndexAt= require('./ex2.js');

describe("function getTheCommaIndexAt", function(){

	it("finds the 3th comma in astring", function(){
		expect(getTheCommaIndexAt('hello,world,this,is,a,great,day', 3))
		.toBe(16);
	});

	it("finds the 4th comma in a string", function(){
		expect(getTheCommaIndexAt('hello,world,this,is,a,great,day', 4))
		.toBe(19);
	});

	it("finds the 1st comma in a string", function(){
		expect(getTheCommaIndexAt(',,,', 1))
		.toBe(0);
	});

	it("returns -1 when an n-th comma is missing", function(){		
		expect(getTheCommaIndexAt(',,,', 4)).toBe(-1);
	});

	it("throw an Error if the n argument is invalid", function(){
		expect(function() { 
			getTheCommaIndexAt(',,,', 0); 
			})
		.toThrow('Invalid # of comma');
	});

	it("throw an Error if the n argument is invalid: negative number", function(){
		expect(function() { 
			getTheCommaIndexAt(',,,', -1); 
			})
		.toThrow('Invalid # of comma');
	});
});
