'use strict';

/* Controllers */

function ListController($scope, lfDictionaryService, lfDictionaryListConfig, $window) {
  $scope.config = lfDictionaryListConfig;
  $scope.response = lfDictionaryService.query();
  $scope.width = $window.innerWidth;
  $scope.height = $window.innerHeight;
}
ListController.$inject = ['$scope', 'lfDictionaryService', 'lfDictionaryListConfig', '$window'];

function DetailController($scope, $routeParams, lfDictionaryService, lfDictionaryDetailConfig) {
  var c = lfDictionaryDetailConfig;
  var r = lfDictionaryService.query({entryId: $routeParams.entryId});
  $scope.config = c;
  $scope.response = r;
  //$scope.wordForm1 = r.entry[c.common.vernacular];
}
DetailController.$inject = ['$scope', '$routeParams', 'lfDictionaryService', 'lfDictionaryDetailConfig'];
