/**
 * Write a function that given a string, returns the first character that
 * doesn't repeat in the whole string. Otherwise (all characters repeat),
 * should return null.
 *
 * For example:
 * firstUniqueChar("abcdedcba") === "e"
 * firstUniqueChar("abcdeedcba") === null
 * firstUniqueChar("abababcab") === "c"
 * firstUniqueChar("aaaaaaaaa") === null
 * firstUniqueChar("a") === "a"
 */
function firstUniqueChar(str) {

	var objCharCounte = buildCharIndicesMap(str);

	return findFirstUniqueCharInMap(objCharCounte);
}

function buildCharIndicesMap(str) {

	var objCharCounter = {},  searchIndex = 0, currentChar = '';

	for (searchIndex = 0; searchIndex < str.length; searchIndex++) {

		currentChar = str.charAt(searchIndex);

		if (objCharCounter[currentChar] === undefined) {

			// Create new property
			objCharCounter[currentChar] = { firstIndex: searchIndex, count: 1};

		} else {

			// Add to property
			objCharCounter[currentChar].count += 1;

		}

	}
	return objCharCounter;
}

function findFirstUniqueCharInMap(objCharCounter) {
	
	var charArray = [], objFirstChar = { charVal: null }, currentChar, currentCounter = 0, currentFirstIndex = 0;
	
	charArray = Object.keys(objCharCounter);

	for (searchIndex = 0; searchIndex < charArray.length; searchIndex++) {
		
		currentChar = charArray[searchIndex];
		currentCounter = objCharCounter[currentChar].count;
		currentFirstIndex = objCharCounter[currentChar].firstIndex;
		
		if (currentCounter === 1) {

			if (objFirstChar.charVal === null || currentFirstIndex < objFirstChar.firstIndex){
				objFirstChar.charVal = currentChar;
				objFirstChar.count = currentCounter;
				objFirstChar.firstIndex = currentFirstIndex;
			  }
		}
	}
	return objFirstChar.charVal;
}

module.exports = firstUniqueChar; 
