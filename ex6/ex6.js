/**
 * Write a string splitter: given a string of comma separated values, would
 * return an array with the values.
 *
 * For example:
 * split('a,b,c') === ['a', 'b', 'c']
 * split('hello,world') === ['hello', 'world']
 * split('hello') === ['hello']
 * split('hello,,,world') === ['hello', '', '', 'world']
 * split('') === []
 *
 */
function split(str) {

	var strArray = [], tmpStr = '';

	// If no chars in string no work to do so will return strArray empty array
	if(str != '') {

		if (str.indexOf(',', 0) === -1) {

			//  Find no comma so we push the whole str valu and return array
			strArray.push(str);

		} else {

			//  Find a comma so we split string to array
			for (var i = 0; i < str.length; i++) {

				if (str[i] === ',') {

					strArray.push(tmpStr);
					tmpStr = '';

				} else {

					tmpStr += str[i];

				}

			}
			// We have to push the last tmpStr
			strArray.push(tmpStr);
		}
	}
	//  Return the array
	//return strArray;
	console.log('array > ', strArray);
}
split('');
module.exports = {split} 
