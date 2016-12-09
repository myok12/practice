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

        var charCounter = {}, firstUniqueCharVal = null;

        for (var searchIndex = 0; searchIndex < str.length; searchIndex++) {

                if (charCounter[str.charAt(searchIndex)] === undefined) {

			// Creat new property
			charCounter[str.charAt(searchIndex)] = 1;

                } else {
			// Add to property
                        charCounter[str.charAt(searchIndex)] += 1;

                }
        }

        for (searchIndex = 0; searchIndex < Object.keys(charCounter).length; searchIndex++) {

                if (charCounter[Object.keys(charCounter)[searchIndex]] === 1) {

                        if (firstUniqueCharVal === null) {

                                firstUniqueCharVal = Object.keys(charCounter)[searchIndex];

                       } else {

                                firstUniqueCharVal = null;
                                break;
                        }
                }
        }
        return firstUniqueCharVal;
}


// 6, 9, 16 s
function AfirstUniqueChar(str) {

	var doNotLookForCharList = '', searchChar = ''; 

	for (var searchIndex = 0; searchIndex < str.length; searchIndex++) {

		searchChar = str[searchIndex];

		//  Let's see if we did look for searchChar
		if (doNotLookForCharList.includes(searchChar) != true) {

			//  SearchChar is not in doNotLookForCharList so will search for it
			if (str.indexOf(searchChar, searchIndex + 1) < 0) {
        
				// Good luck, we did find a unique char in str so we return the unique char
				return searchChar;

			} else {
			   //  We did find more then one searchChar in str
			   //  So we will add searchChar to  doNotLookForCharList and continue
			   doNotLookForCharList += searchChar;
			}
		} 	
	}
	//  We did get to the end of the str and no unique char in str so we return null
	return null;
}

module.exports = firstUniqueChar; 
