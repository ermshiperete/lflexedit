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
  common: {
    vernacular: "th",
    ipa: "th-fonipa"
  },
  entry: {
      word: { label: "Word", type: "multitext", forms: ["th", "th-fonipa"] },
  },
  sense: {
      definition: { label: "Definition", type: "multitext", forms: ["en", "fr"] },
      partofspeech: { label: "Part of Speech", type: "trait", forms: ["en"] }
  },
  example: {
      example: { label: "Example", type: "multitext", forms: ["en", "fr"] },
    translation: { label: "Translation", type: "multitext", forms: ["en", "fr"] }
  }
});

lfServices.factory('lfDictionaryService', function($resource) {
  return $resource(
    'data/:entryId.json',
    {},
    { query: { method: 'GET', params: {entryId: 'browse'}, isArray: false }}
  )
});