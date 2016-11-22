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

	var doNotLookForCharList = '', searchChar = '', searchIndex = 0; 

	for (searchIndex in str) {

		searchIndex = parseInt(searchIndex);

		searchChar = str.charAt(searchIndex);

		//  Let's see if we did look for searchChar
		if (doNotLookForCharList.includes(searchChar) != true) {

			//  searchChar is not in doNotLookForCharList so will search for it
			if (str.indexOf(searchChar, searchIndex + 1) < 0) {
        
				// Good luck, we did find a unique char in str so we return the unique char
				return searchChar;

			} else {
			   //  We did find searchChar in str
			   //  So we will add searchChar to  doNotLookForCharList and continue
			   doNotLookForCharList += searchChar;
			}
		} 	
	}
	//  We did get to the end of the str and no unique char in str so we return null
	return null;
}

module.exports = { firstUniqueChar }
