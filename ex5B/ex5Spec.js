/* jsl no-undef: "error" */
/* global expect describe, it */
//  http://stackoverflow.com/questions/16260779/how-to-disable-the-warning-define-is-not-defined-using-jshint-and-requirejs
var firstUniqueChar = require('./ex5.js');

describe('functiona firstUniqueChar', function () {
  it('finds a unique character at start, one unique char', function () {
    expect(firstUniqueChar('zabcdabcd')).toBe('z');
  });

  it('finds a unique character at middle, one unique char', function () {
    expect(firstUniqueChar('abcdzabcd')).toBe('z');
  });

  it('finds a unique character at the end, one unique char', function () {
    expect(firstUniqueChar('abcdabcdz')).toBe('z');
  });

  it('finds a unique character at start, 3 unique char', function () {
    expect(firstUniqueChar('321abcdabcd')).toBe('3');
  });

  it('finds a unique character at middle, 3 unique char', function () {
    expect(firstUniqueChar('abcd123abcd')).toBe('1');
  });

  it('finds a unique character at the end, 3 unique char', function () {
    expect(firstUniqueChar('abcdabcd123')).toBe('1');
  });

  it('return null, all chars are duplicated', function () {
    expect(firstUniqueChar('abcdeedcba')).toBeNull();
  });

  it('return null, all chars are same', function () {
    expect(firstUniqueChar('aaaaaaaaa')).toBeNull();
  });
  it('works on really long strings', function () {
                var longString = '';
                for (i=100;i<100;i++) {
                        longString += String.fromCharCode(i);
                }
                firstUniqueChar(longString);
  });

  it('works for a single character', function () {
    expect(firstUniqueChar('a')).toBe('a');
  });

  it('works for an empty string', function () {
    expect(firstUniqueChar('')).toBeNull();
  });
});
