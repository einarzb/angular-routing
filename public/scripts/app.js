var app = angular.module('scotcha', ['ui.router']);
//injecting ui.router

app.config(function($stateProvider, $urlRouterProvider) {
  //homepage
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'partial-home.html'
    //vanilla way: template:'<h1>hello world!</h1>'
  });

}); 


