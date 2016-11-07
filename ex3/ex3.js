/**
 * Write a function that is given an array of numbers and a number and returns
 * whether the number exists within the array.
 *
 * For example:
 * containsValue([1,3,5,7,9], 8) === false;
 * containsValue([1,3,5,7,9], 7) === true;
 * containsValue([9,7,5,3,1], 7) === true;
 */
function containsValue(arrayNumber, searchForNumber) {

	console.assert(isNumber(searchForNumber),'is not a number');
	//  We define isNumberInArray as false so only if we find the search number we will set it to true 
	//  otherwise will return falsh
	var isNumberInArray = false;
	
	//  Loop through arrayNumber 
	for (var i = 0; i < arrayNumber.length; ++i) {

		// Looking for searchForNumber in arrayNumber
		if(arrayNumber[i] === searchForNumber) {
			// We found a matching number in the arrayNumber 
			// 1) so leti's set isNumberInArray to true 
			// 2) and stop the loop
			isNumberInArray = true;
			break;
		}
	}
	// return falsh if no match 
	// return true if found a match
	return isNumberInArray; 
}
//////////////////////////////////////////////////
// set arrayNumber values
var arrayNumber = [1,3,5,7,9]; 

// set earchFornumber value
var searchForNumber = 8;

testContainsValue(arrayNumber, searchForNumber);

 

//////////////////////////////////////////////////
// set arrayNumber values
arrayNumber = [1,3,5,7,9]; 

// set earchFornumber value
searchForNumber = 7;

testContainsValue(arrayNumber, searchForNumber);



//////////////////////////////////////////////////
// set arrayNumber values
arrayNumber = [9,7,5,3,1]; 

// set earchFornumber value
searchForNumber = 7;
testContainsValue(arrayNumber, searchForNumber)

// Test function to print to cosole log
function testContainsValue(arrayNumber, searchForNumber) {
	console.log(containsValue(arrayNumber, searchForNumber));
}


