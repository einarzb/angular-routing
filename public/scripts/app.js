var app = angular.module('scotcha', ['ui.router']);
//injecting ui.router

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home/review'); //re-route the user to the URL that activates our home state if it otherwise can't find a matching route.

//homepage
  $stateProvider
    .state('home', {
    url: '/home',
    templateUrl: 'partial-home.html'
    //vanilla way: template:'<h1>hello world!</h1>'
  }) //nested state
    .state('home.list', {
    url:'/list',
    templateUrl: 'partial-home-list.html'
  }) //nested reviews
    .state('home.review', {
    url:'/review',
    templateUrl:'partial-home-review.html' 
  })

 $stateProvider.state('contact', {
  url: '/contact',
  templateUrl: 'partial-contact.html'
  });

});
