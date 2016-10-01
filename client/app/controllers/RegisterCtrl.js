'use strict';

app.controller('RegisterCtrl', function($scope, RegisterFactory) {

	$scope.register = function() {
		RegisterFactory
			.registerNewUser({
					username: $scope.username,
					password: $scope.password
			})
	}

})