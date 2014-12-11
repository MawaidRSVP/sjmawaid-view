//var app = angular.module('app', [ 'app.rsvpMain' ]);
//
//app.controller('RsvpCtrl', ['$scope', 'StaticListsFactory', function($scope, StaticListsFactory) {
//
//	var params = {
//		category : 'commits'
//	}// , sha: '80e7a4558490f7ffd33d142844b9153a5ed00e86'}
//	console.log(RsvpMain.query(params))
//	$scope.ob = RsvpMain.query(params)
//}]);
//
//angular.module('StaticListsFactory', [ 'ngResource' ])
//		.factory(
//				'RsvpMain',
//				function($resource) {
//					return $resource('https://api.github.com/repos/angular/angular.js/:category/:sha')
//				})


angular
	.module('app', ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home.htm',
				controller: 'homeCtrl',
				data: {
					pageTitle: 'Welcome to Faiz-ul-Mawaid al-Burhaniya, San Jose'
				}
			}) //home Provider
			.state('rsvp', {
				url: '/rsvp',
				templateUrl: 'rsvp.htm',
				controller: 'rsvpCtrl',
				data: {
					pageTitle: 'rsvp'
				}
			}) //rsvp Provider
			.state('pickup', {
				url: '/pickup',
				templateUrl: 'pickup.htm',
				controller: 'pickupCtrl',
				data: {
					pageTitle: 'pickup'
				}
			}) //pickup Provider
			.state('admin', {
				url: '/admin',
				templateUrl: 'admin.htm',
				controller: 'adminCtrl',
				data: {
					pageTitle: 'admin'
				}
			}) //admin Provider

	}])
	
	
