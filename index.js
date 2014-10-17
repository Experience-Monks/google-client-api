var scriptjs = require( 'scriptjs' ),
	promise = require( 'promise' );

module.exports = new promise( function( resolve, reject ) {

	if( window.gapi ) {

		resolve( window.gapi );
	} else {

		window.$$onClientLoad = function() {

			resolve( gapi );
		};

		scriptjs( 'https://apis.google.com/js/client.js?onload=$$onClientLoad' );
	}
});