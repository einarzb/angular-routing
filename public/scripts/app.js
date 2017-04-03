var app = angular.module('igg', ['ui.router']); //injecting ui.router

app.config(function($stateProvider, $urlRouterProvider) {
  //re-route the user to the URL that activates our home state if it otherwise can't find a matching route.
  $urlRouterProvider.otherwise('/home');

//homepage
  $stateProvider
    .state('home', {
    url: '/home',
    templateUrl: '../templates/partial-home.html'
    //vanilla way: template:'<h1>hello world!</h1>'
  }) //nested state
    .state('home.list', {
    url:'/list',
    templateUrl: '../templates/partial-home-list.html'
  }) //nested reviews
    .state('home.review', {
    url:'/review',
    templateUrl:'../templates/partial-home-review.html'
  })

 $stateProvider.state('contact', {
  url: '/contact',
  templateUrl: '../templates/partial-contact.html'
  });

});
