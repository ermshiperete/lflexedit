'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var lfServices = angular.module('lfDictionaryServices', ['ngResource']);
lfServices.value('version', '0.1');

lfServices.value('lfDictionaryListConfig', {
  vernacular: 'th',
  ipa: 'th-fonipa'
});

lfServices.value('lfDictionaryDetailConfig', {
  fields: [
           { label: "Word", level: "entry", type: "multitext", forms: ["th", "th-fonipa"] },
           { label: "Definition", level: "sense", type: "multitext", forms: ["en", "fr"] }
  ]
});

lfServices.factory('lfDictionaryService', function($resource) {
  return $resource(
    'data/:entryId.json',
    {},
    { query: { method: 'GET', params: {entryId: 'browse'}, isArray: false }}
  )
});