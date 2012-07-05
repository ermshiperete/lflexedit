'use strict';

/* Controllers */

function ListController($scope, lfDictionaryService, lfDictionaryBrowseConfig) {
  $scope.config = lfDictionaryBrowseConfig;
  $scope.response = lfDictionaryService.query();
//	$http.get('data/browse.json').success(function(data) {
//		$scope.phones = data;
//	});


}
ListController.$inject = ['$scope', 'lfDictionaryService', 'lfDictionaryBrowseConfig'];

function DetailController($scope, lfDictionaryEditConfig) {
  $scope.forms = lfDictionaryEditConfig;
    //$scope.$route = $route;
    //$scope.$location = $location;
    //$scope.$routeParams = $routeParams;
}
DetailController.$inject = ['$scope', 'lfDictionaryEditConfig'];
