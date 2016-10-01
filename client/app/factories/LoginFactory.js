'use strict';

app.factory('LoginFactory', function($http, $location) {

	const loginUser = function(userObj) {

		$http
			.post('/api/login', userObj)
			.then((data) => {
				console.log(data)
			})

	}

	return { loginUser }

})