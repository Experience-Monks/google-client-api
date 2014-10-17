<a name="module_google-client-api"></a>
#google-client-api
<a name="exp_module_google-client-api"></a>
##module.exports(onComplete) ⏏
This module is a function which will return a 
[Google Client API](https://developers.google.com/api-client-library/javascript/dev/dev_jscript) object assynchronously.

This function returns a promise. (if you're into promises) Which will return the gapi Object.

If you're not into promises then you can simply call this function and pass in a callback object.

**Params**

- onComplete `function` - an optional callback which will return the Google Client API Object.  

**Returns**: `Promise` - This function also returns a promise if you're into promises which will
                  return the Google Client API Object.  
##Example
Using with Promise:
```javascript
require( 'google-client-api' )().then( function( gapi ) {
	// Do something with the gapi object
});
```

Using with callback:
```javascript
require( 'google-client-api' )( function( gapi ) {
	// Do something with the gapi object
});
```