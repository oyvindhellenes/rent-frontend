angular.module('RDash', ['ui.bootstrap', 'ui.router', 'ngCookies', 'ngResource'])
	.config(['$httpProvider','$resourceProvider', function($httpProvider, $resourceProvider){
  		$httpProvider.defaults.xsrfCoockieName = 'csrftoken';
  		$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

  		// Don't strip trailing slashes from calculated URLs
  		$resourceProvider.defaults.stripTrailingSlashes = false;

  }]);