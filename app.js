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
.module('app', ['ui.router', 'ngResource'])
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
.controller('homeCtrl', ['$scope', 'StaticListsFactory', function($scope, StaticListsFactory) {
	$scope.pageTitle = "Welcome HOME";
		//$scope.contacts = ["a", "b", "c"];
		$scope.contacts = StaticListsFactory.getContactsList();

		console.log();

	}]);


//-------------------------------------

angular
.module('app')
.controller('rsvpCtrl', ['$scope', 'StaticListsFactory', function($scope, StaticListsFactory) {
	$scope.pageTitle = "Welcome RSVP";
	$scope.user = "user";

	console.log(StaticListsFactory.getLocationsList());
}]);



//-------------------------------------

angular
.module('app')
.controller('pickupCtrl', ['$scope', 'StaticListsFactory', function($scope, StaticListsFactory) {
	$scope.pageTitle = "Welcome Pickup";
	$scope.user = "user";

	console.log(StaticListsFactory.getLocationsList());
}]);




//-------------------------------------

angular
.module('app')
.controller('adminCtrl', ['$scope', 'StaticListsFactory', 'AdminFactory', function($scope, StaticListsFactory, AdminFactory) {
	$scope.pageTitle = "Welcome Admin";
	$scope.user = "user";

	console.log(AdminFactory.getAdminLines());
}]);


angular
.module('app')
.factory('AdminFactory', ['$http', function($http) {
	var adminLines = [];

	return {
		getAdminLines: function() {
			//TODO: check if admin lines already present
			$http.get('admin.json').success(function(data) {
		        console.log("success!");
		        adminLines = data;
		    });
		    return adminLines;
		}
	}
}]);


//------------------------------------

angular
.module('app')
.factory('StaticListsFactory', ['$resource', function($resource) {
	var contacts = [
		{name: "Janab Ammar bs Zakiuddin", title:"San Jose Amil", email:"sanjoseamil@alvazarat.org"},
		{name: "Faiz-ul-Mawaid al-Burhaniya Committee", title:"General questions", email:"faiz.mawaid.sj@gmail.com"},
		{name: "M. Aliasgar Saifee", title:"Treasurer", email:"saifee@gmail.com"},
		{name: "Shabbir Ghadiali", title:"RSVP Mgmt & Site Admin", email:"shabbirag@gmail.com"},
		{name: "Kaizar Sogiawala", title:"Secretary", email:"kaizers@gmail.com"}
		]

	var counts = [1, 2, 3]

	var locations = ['Sunnyvale', 'Milpitas', 'Los Gatos', 'Cupertino', 'Masjid' ]

	var mawaidType = ['None', 'Mawaid', 'Miqaat']

	var yesNo = ['Y', 'N']

	return {
		getContactsList: function() {
			return contacts
		},
		getCountsList: function() {
			return counts
		},
		getLocationsList: function() {
			return locations
		},
		getMawaidTypeList: function() {
			return mawaidType
		},
		getYesNoList: function() {
			return yesNo
		},

	}
}]);

// angular.module('StaticListsService', ['ngResource'])
//     .factory('ContactsRes', function ($resource) {
//         return $resource('contacts.json',
//         				{ }, 
//         				{getData: {method:'GET', isArray: true}});
//     })

//     ;