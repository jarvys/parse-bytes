var assert = require("assert");

var units = require("./units.js");
var parse = require("./index.js");

it('only some bits with binary unit', function() {
	assert.deepEqual(parse(3), {
		b: 3,
		kb: 0,
		mb: 0,
		gb: 0,
		tb: 0,
		pb: 0
	});
});

it('parse with binary unit', function() {
	var unit = units.binary;
	var size = 3 + 3 * unit.KB + 3 * unit.MB + 3 * unit.GB;
	assert.deepEqual(parse(size), {
		b: 3,
		kb: 3,
		mb: 3,
		gb: 3,
		tb: 0,
		pb: 0,
	});
});

it('parse with decimal unit', function() {
	assert.deepEqual(parse(3003003003, true), {
		b: 3,
		kb: 3,
		mb: 3,
		gb: 3,
		tb: 0,
		pb: 0,
	});
});
