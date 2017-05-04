var myApp = angular.module('myApp', ['ngRoute', 'ui.materialize', 'ngCookies', 'ngMap']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/home.html',
        controller: 'homeController'
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
    .when('/newEvent',{
        templateUrl: 'partials/newEvent.html',
        controller: 'newEventsController'
    })
    .when('/events/:id',{
        templateUrl: 'partials/events.html',
        controller: 'eventsController'
    })
    .otherwise({
      redirectTo: '/'
    });
});