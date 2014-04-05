var units = require("./units.js");

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
