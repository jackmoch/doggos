'use strict';

app.factory('RegisterFactory', function($http) {

	const registerNewUser = function(newUserObj) {

		console.log(newUserObj)
		// $http
		// 	.post('/api/register', newUserObj)

	}

	return { registerNewUser }

})