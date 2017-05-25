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
      .when('/', {/*INICIO*/
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl',
        controllerAs: 'vm'
      })
      .when('/organigrama',{/*ORGANIGRAMA*/
        templateUrl: 'views/organigrama.html',
        controller: 'OrganigramaCtrl',
        controllerAs: 'vm'
      })
      .when('/directorio',{/*DIRECTORIO*/
        templateUrl: 'views/directorio.html'
      })
      .when('/sgc',{/*SGC*/
        templateUrl: 'views/sgc.html',
        controller: 'ScgCtrl',
        controllerAs: 'vm'
      })
      .when('/normatividad',{/*NORMATIVIDAD*/
        templateUrl: 'views/normatividad.html',
        controller: 'NormatividadCtrl',
        controllerAs: 'vm'
      })
      .when('/blog',{/*NORMATIVIDAD*/
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'vm'
      })
      .when('/organismosAcreditadores',{/*organismosAcreditadores*/
        templateUrl: 'views/organismosAcreditadores.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
