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

  var objCharCounter = {}, objFirstChar = { charVal: null }, searchIndex = 0;

  for (searchIndex = 0; searchIndex < str.length; searchIndex++) {

    if (objCharCounter[str.charAt(searchIndex)] === undefined) {

      // Create new property
      objCharCounter[str.charAt(searchIndex)] = { index: searchIndex, count: 1};

    } else {

      // Add to property
      objCharCounter[str.charAt(searchIndex)].count += 1;

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

function BfirstUniqueChar(str) {

        var charCounter = {}, firstChar = null;

        for (var searchIndex = 0; searchIndex < str.length; searchIndex++) {
                if (charCounter[str.charAt(searchIndex)] === undefined) {

                        // Create new property
objCharCount[str.charAt(searchIndex)] = { index: searchIndex, count: 1};
                } else {
                        // Add to property
                        objCharCounter[str.charAt(searchIndex)].count += 1;

                }
        }
        keysCharCounter = Object.keys(charCounter);

        for (searchIndex = 0; searchIndex <Object.keys(charCounter).length; searchIndex++) {

                if (objCharCounter[keysCharCounter[searchIndex]] === 1) {
			
			if (charCounter[keysCharCounter[searchIndex+1]] !== 1) {

                                firstChar = keysCharCounter[searchIndex].charAt(1);
			} else {
			return null;}
                }
        }
        return firstChar;
}


function AfirstUniqueChar (str) {
var charCounter = {}, firstChar = null, searchIndex = 0;

  for (searchIndex = 0; searchIndex < str.length; searchIndex++)  {
                if (charCounter[str.charAt(searchIndex)] === undefined) {
			// Create new property
			charCounter[str.charAt(searchIndex)] = 1;

                } else {

			// Add to property
                        charCounter[str.charAt(searchIndex)] += 1;

                }
        }
        for (var i = 0; i < 100; i++) {
                 console.log('123');
	}
	
	keysCharCounter = Object.keys(charCounter);

        for (searchIndex = 0; searchIndex < keysCharCounter.length; searchIndex++) {

                if (charCounter[keysCharCounter[searchIndex]] === 1) {

			return keysCharCounter[searchIndex];
                }
        }
        return firstChar;
}

module.exports = firstUniqueChar; 
