var app = angular.module('myApp',["ngRoute"]);

app.config(function($routeProvider){

	$routeProvider.when('/',{

		templateUrl: 'templates/Login.html'
	})



});