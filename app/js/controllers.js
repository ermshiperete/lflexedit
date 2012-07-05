'use strict';

/* Controllers */

function ListController($scope, lfDictionaryService, lfDictionaryListConfig) {
  $scope.config = lfDictionaryListConfig;
  $scope.response = lfDictionaryService.query();
//	$http.get('data/browse.json').success(function(data) {
//		$scope.phones = data;
//	});


}
ListController.$inject = ['$scope', 'lfDictionaryService', 'lfDictionaryListConfig'];

function DetailController($scope, $routeParams, lfDictionaryService, lfDictionaryDetailConfig) {
  $scope.config = lfDictionaryDetailConfig;
  $scope.response = lfDictionaryService.query({entryId: $routeParams.entryId});
    //$scope.$route = $route;
    //$scope.$location = $location;
    //$scope.$routeParams = $routeParams;
}
DetailController.$inject = ['$scope', '$routeParams', 'lfDictionaryService', 'lfDictionaryDetailConfig'];
