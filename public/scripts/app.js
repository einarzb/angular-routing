var app = angular.module('igg', ['ui.router']); //injecting ui.router

/*We can configure a service using its provider.
Every service has a provider ($httpProvider) and state service ($stateProvider)*/
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

//re-route the user to the URL that activates our home state if it otherwise can't find a matching route.
  $urlRouterProvider.otherwise('home');

//homepage
  $stateProvider
    .state('home', { //method that gets argumnet (name, Options Object{url, templateUrl})
    url: '/home',
    templateUrl: '../templates/partial-home.html'
    //vanilla way: template:'<h1>hello world!</h1>'
  }) //nested state
     .state('home.list', {
       url: '/list',
       templateUrl: '../templates/partial-home-list.html',
       controller: function($scope) {
          $scope.scotches = ['Balvenie', 'The Balmore', 'Highland Park'];
       }
     })
     .state('home.test', {
        url: '/id',
        templateUrl: '../templates/partial-home-list-id.html'
      })
      .state('home.test.id', {
         url: '/id/test',
         templates: '<h1>heyo whats up</h1>'
       })
    .state('contact', {
  url: '/contact',
  templateUrl: '../templates/partial-contact.html'
  })
    .state('about', {
   url: '/about',
   templateUrl: '../templates/partial-about.html'
   })

   // use the HTML5 History API - Removing the #!
   $locationProvider.html5Mode(true);
});
