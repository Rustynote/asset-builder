'use strict';

var fs = require('fs');
var p  = require('path');

/**
 * readManifest
 * Converts the manifest JSON file to an object
 *
 * @private
 * @param {String} path path to the manifest file
 * @return {Object} The contents of the JSON file
 */
module.exports = function(path) {
	// check if string or a object was passed.
	if(typeof path === 'object' && path !== null) {
		return path;
	} else {
		return JSON.parse(fs.readFileSync(p.normalize(path), 'utf8'));
	}
};
