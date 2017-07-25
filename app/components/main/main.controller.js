'use strict';

var mainCtrl = /*@ngInject*/ function($scope, $http, dataService) {

	var vm = this;
	vm.title = 'Resistance is Futile';
	vm.matchedSongs = [];
	vm.queryBySong = queryBySong;

	/*============================================
	=            function definitions            =
	============================================*/
	
	function queryBySong (song, artist) {
		dataService.getSongMatches(song, artist)
			.then(function(data) {
				vm.matchedSongs = data;
				console.log(vm.matchedSongs);
			});

	}
	
	/*=====  End of function definitions  ======*/
		

};

module.exports = mainCtrl;