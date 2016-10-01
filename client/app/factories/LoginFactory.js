

app.factory('LoginFactory', function($http, $location) {

	const loginUser = function(userObj) {

		$http
			.post('/api/login', userObj)
			.then(({data}) => {
				if(data.user) {
					$location.path('/')
				} else {
					$location.path('/login')
				}
			})

	}

	return { loginUser }

})