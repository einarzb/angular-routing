var app = angular.module('scotcha', ['ui.router']);
//injecting ui.router

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  //homepage
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'partial-home.html'
    //vanilla way: template:'<h1>hello world!</h1>'
  });

 $stateProvider.state('contact', {
  url: '/contact',
  templateUrl: 'partial-contact.html'
  });

}); 


