/**
 * Write a function that is given an array of numbers and a number and returns
 * whether the number exists within the array.
 *
 * For example:
 * containsValue([1,3,5,7,9], 8) === false;
 * containsValue([1,3,5,7,9], 7) === true;
 * containsValue([9,7,5,3,1], 7) === true;
 */
function containsValue(valueArr, searchValue) {

	for (var i = 0; i < valueArr.length; ++i) {

		if (valueArr[i] === searchValue) {
			//  We found a match
			return true;
		}
	}
	//  No match
	return false;
}

module.exports = containsValue;
