'use strict';

const app = angular.module('doggos', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
	// $locationProvider.html5Mode(true)
 //  $locationProvider.hashPrefix = '/'
	$routeProvider
	.when('/', {
		controller: 'HomeCtrl',
		'templateUrl': 'partials/home.html'
	})
})