'use strict';

app.factory('RegisterFactory', function($http, $location) {

	const registerNewUser = function(newUserObj) {

		$http
			.post('/api/register', newUserObj)
			.then((user) => {
				console.log(user.data)
				if(user.data.username) {
					$location.path('/login')
				}
			})
	}

	return { registerNewUser }

})