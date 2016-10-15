// receive 2 array. 
// return matching value. if no match return null
function getMatchingValue(a, b) {
	
	var result = [];
	a.forEach(function (el) {
		if (b.indexOf(el) != -1) {
			result.push(el);// Push mach
		}
	});

	if (result.length >=1) {
		return result;// Return matching values
	} else {
		return null;// No match, return null
	}
}

var a = ['a','b','c','d','c'], b = ['a','c','f','h'];
// Return matching value
console.log(getMatchingValue(a, b));

//  No match return null
var a = ['a','b','c','d','c','a','b','c','d','c'], b = ['s','t','f','h'];
getMatchingValue(a, b);
