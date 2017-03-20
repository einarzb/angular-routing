var app = angular.module('scotcha', ['ui.router']);
//injecting ui.router

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home'); //re-route the user to the URL that activates our home state if it otherwise can't find a matching route.

//homepage
  $stateProvider
    .state('home', {
    url: '/home',
    templateUrl: 'partial-home.html'
    //vanilla way: template:'<h1>hello world!</h1>'
  })
    .state('home.list', {
    url:'/list',
    templateUrl: 'partial-home-list.html'
  })

 $stateProvider.state('contact', {
  url: '/contact',
  templateUrl: 'partial-contact.html'
  });

});
