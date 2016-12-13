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

  var objCharCounter = {}, objFirstChar = { charVal: null }, searchIndex = 0, currentChar = '';

  for (searchIndex = 0; searchIndex < str.length; searchIndex++) {

    currentChar = str.charAt(searchIndex);

    if (objCharCounter[currentChar] === undefined) {

      // Create new property
      objCharCounter[currentChar] = { index: searchIndex, count: 1};

    } else {

      // Add to property
      objCharCounter[currentChar].count += 1;

   }

  }

  charArray = Object.keys(objCharCounter);

  for (searchIndex = 0; searchIndex < Object.keys(objCharCounter).length; searchIndex++) {

		if (objCharCounter[charArray[searchIndex]].count === 1) {
			if (objFirstChar.charVal === null || objCharCounter[charArray[searchIndex]].index < objFirstChar.charVal){

				objFirstChar.charVal = charArray[searchIndex];
				objFirstChar.count = objCharCounter[charArray[searchIndex]].count;
				objFirstChar.index = objCharCounter[charArray[searchIndex]].index;

		 }
		}
	}
	return objFirstChar.charVal;
}

module.exports = firstUniqueChar; 
