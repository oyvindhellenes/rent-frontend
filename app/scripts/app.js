'use strict';

angular
  .module('rentApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize'
  ])
  .config(['$httpProvider','$resourceProvider', function($httpProvider, $resourceProvider){
  	$httpProvider.defaults.xsrfCoockieName = 'csrftoken';
  	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

  	// Don't strip trailing slashes from calculated URLs
  	$resourceProvider.defaults.stripTrailingSlashes = false;

  }])
