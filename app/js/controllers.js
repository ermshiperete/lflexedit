'use strict';

/* Controllers */

function BrowseController($scope, lfDictionaryService, lfDictionaryBrowseConfig) {
  $scope.config = lfDictionaryBrowseConfig;
  $scope.response = lfDictionaryService.query();
//	$http.get('data/browse.json').success(function(data) {
//		$scope.phones = data;
//	});


}
BrowseController.$inject = ['$scope', 'lfDictionaryService', 'lfDictionaryBrowseConfig'];

function EditController($scope, lfDictionaryEditConfig) {
  $scope.forms = lfDictionaryEditConfig;
    //$scope.$route = $route;
    //$scope.$location = $location;
    //$scope.$routeParams = $routeParams;
}
EditController.$inject = ['$scope', 'lfDictionaryEditConfig'];
