require( '../' )( function( gapi ) {

	console.log( 'FROM CALLBACK', gapi );
}).then( function( res ) {

	console.log( 'FROM PROMISE', gapi );
});

console.log( 'hmmm' );