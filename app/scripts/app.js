'use strict';

/**
 * @ngdoc overview
 * @name pApp
 * @description
 * # pApp
 *
 * Main module of the application.
 */
angular
  .module('pApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
     $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/organigrama',{
        templateUrl: 'views/organigrama.html',
        controller: 'OrganigramaCtrl',
        controllerAs: 'vm'
      })
      .when('/directorio',{
        templateUrl: 'views/directorio.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
