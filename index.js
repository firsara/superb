'use strict';
var words = require('./words');
var uniqueRandomArray = require('unique-random-array');

var prefixWord = function(){
	var word = module.exports();
	var firstChar = word.substring(0, 1);

	if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u') {
		return 'an ' + word;
	}

	return 'a ' + word;
};

module.exports = uniqueRandomArray(words);
module.exports.words = words;
module.exports.prefix = prefixWord;
