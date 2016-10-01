'use strict';

app.factory('LoginFactory', function($http, $location) {

	const loginUser = function(userObj) {

		console.log(userObj)

	}

	return { loginUser }

})