/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pow = require( '@stdlib/math-base-special-pow' );
var triangular = require( '@stdlib/random-base-triangular' );
var filledarray = require( '@stdlib/array-filled' );
var pkg = require( './../package.json' ).name;
var ternaryFactory = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var factory;
	var random;
	var out;
	var x;
	var y;
	var z;

	factory = ternaryFactory( triangular );
	random = factory();

	x = filledarray( 2.0, len, 'float64' );
	y = filledarray( 5.0, len, 'float64' );
	z = filledarray( 3.0, len, 'float64' );
	out = filledarray( 0.0, len, 'float64' );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var o;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			o = random( len, x, 1, y, 1, z, 1, out, 1 );
			if ( isnan( o[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( o[ i%len ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+'::fill:dtype=float64,len='+len, f );
	}
}

main();
