var myApp = angular.module('myApp', ['ngRoute', 'ui.materialize', 'ngCookies']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/home.html',
        controller: 'homeController'
    })
    .when('/event',{
        templateUrl: 'partials/event.html',
        controller: 'eventController'
    })
    .when('/login',{
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    })
    .when('/signup',{
        templateUrl: 'partials/login.html',
        controller: 'signupController'
    })
    .when('/profile/:id',{
        templateUrl: 'partials/profile.html',
        controller: 'profileController'
    })
    .otherwise({
      redirectTo: '/'
    });
});