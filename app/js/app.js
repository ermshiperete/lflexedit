'use strict';


// Declare app level module which depends on filters, and services
var lfDbeModule = angular.module('lf-dbe', ['lf-dbe.filters', 'lfDictionaryServices', 'lf-dbe.directives']);
lfDbeModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/List', {templateUrl: 'partials/List.html', controller: ListController});
    $routeProvider.when('/Detail', {templateUrl: 'partials/Detail.html', controller: DetailController});
    $routeProvider.otherwise({redirectTo: '/List'});
}]);
