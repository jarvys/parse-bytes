!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.parseBytes=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var units = _dereq_("./units.js");

module.exports = function parse(size, decimal) {
	var unit = decimal ? units.decimal : units.binary;

	return {
		b: Math.floor(size % unit.KB),
		kb: Math.floor(size / unit.KB % unit.KB),
		mb: Math.floor(size / unit.MB % unit.KB),
		gb: Math.floor(size / unit.GB % unit.KB),
		tb: Math.floor(size / unit.TB % unit.KB),
		pb: Math.floor(size / unit.PB % unit.KB)
	};
};

},{"./units.js":2}],2:[function(_dereq_,module,exports){
module.exports = {
	binary: {
		KB: Math.pow(2, 10),
		MB: Math.pow(2, 20),
		GB: Math.pow(2, 30),
		TB: Math.pow(2, 40),
		PB: Math.pow(2, 50)
	},

	decimal: {
		KB: Math.pow(10, 3),
		MB: Math.pow(10, 6),
		GB: Math.pow(10, 9),
		TB: Math.pow(10, 12),
		PB: Math.pow(10, 15)
	}
};

},{}]},{},[1])
(1)
});