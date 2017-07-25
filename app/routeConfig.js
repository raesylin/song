'use strict';

var routeConfig = /*@ngInject*/ function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/components/main/main.view.html',
		controller: 'mainCtrl',
		controllerAs: 'main'
	})
	.otherwise({
		redirectTo: '/'
	});

	// $locationProvider.html5Mode(true);
};

module.exports = routeConfig;