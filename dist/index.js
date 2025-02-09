/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution excess kurtosis.
*
* @module @stdlib/stats-base-dists-discrete-uniform-kurtosis
*
* @example
* var kurtosis = require( '@stdlib/stats-base-dists-discrete-uniform-kurtosis' );
*
* var v = kurtosis( 0, 1 );
* // returns -2.0
*
* v = kurtosis( 4, 12 );
* // returns ~-1.23
*
* v = kurtosis( -4, 8 );
* // returns ~-1.214
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
