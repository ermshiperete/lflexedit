'use strict';


// Declare app level module which depends on filters, and services
var lfDbeModule = angular.module('lf-dbe', ['lf-dbe.filters', 'lfDictionaryServices', 'lf-dbe.directives']);
lfDbeModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Browse', {templateUrl: 'partials/Browse.html', controller: BrowseController});
    $routeProvider.when('/Edit', {templateUrl: 'partials/Edit.html', controller: EditController});
    $routeProvider.otherwise({redirectTo: '/Browse'});
  }]);
