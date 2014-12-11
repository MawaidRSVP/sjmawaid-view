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

	}]);
	
//-------------------------------------

angular
	.module('app')
	.controller('homeCtrl', ['$scope', function($scope) {
		$scope.pageTitle = "Welcome HOME";
		//$scope.contacts = ["a", "b", "c"];
		$scope.contacts = [
			{name: "Janab Ammar bs Zakiuddin", title:"San Jose Amil", email:"sanjoseamil@alvazarat.org"},
			{name: "M. Aliasgar Saifee", title:"Treasurer", email:"saifee@gmail.com"},
			{name: "Shabbir Ghadiali", title:"RSVP Mgmt & Site Admin", email:"shabbirag@gmail.com"},
			{name: "Faiz-ul-Mawaid al-Burhaniya Committee", title:"General questions", email:"faiz.mawaid.sj@gmail.com"},
			{name: "Kaizar Sogiawala", title:"Secretary", email:"kaizers@gmail.com"}
		];

	}]);


//-------------------------------------

angular
	.module('app')
	.controller('rsvpCtrl', ['$scope', function($scope) {
		$scope.pageTitle = "Welcome RSVP";
		$scope.user = "user";
	}]);
