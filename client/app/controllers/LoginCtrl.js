'use strict';

app.controller('LoginCtrl', function($scope, LoginFactory) {

	$scope.login = function() {
		LoginFactory
			.loginUser({
				username: $scope.username,
				password: $scope.password
			})
	}
})