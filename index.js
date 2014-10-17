/** @module google-client-api */

var scriptjs = require( 'scriptjs' ),
	promise = require( 'promise' );

/** 
 * This module is a function which will return a Google Client API object 
 * (https://developers.google.com/api-client-library/javascript/dev/dev_jscript) assynchronously.
 *
 * This function returns a promise. (if you're into promises) Which will return the gapi Object.
 *
 * If you're not into promises then you can simply call this function and pass in a callback object.
 * 
 * @param  {Function} onComplete an optional callback which will return the Google Client API Object.
 * @return {Promise} This function also returns a promise if you're into promises which will
 *                   return the Google Client API Object.
 *
 * @example Using with Promise
 * require( 'google-client-api' )().then( function( gapi ) {
 * 	// Do something with the gapi object
 * });
 *
 * @example Using with callback
 * require( 'google-client-api' )( function( gapi ) {
 * 	// Do something with the gapi object
 * });
 */
module.exports = function( onComplete ) {

	return new promise( function( resolve, reject ) {

		if( window.gapi ) {

			doResolve( resolve, onComplete );
		} else {

			window.$$onClientLoad = function() {

				doResolve( resolve, onComplete );
			};

			scriptjs( 'https://apis.google.com/js/client.js?onload=$$onClientLoad' );
		}
	});
};

function doResolve( resolve, onComplete ) {

	resolve( window.gapi );

	if( onComplete )
		onComplete( window.gapi );
}