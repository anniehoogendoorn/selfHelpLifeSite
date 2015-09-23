var selfHelpLifeSite = angular.module('selfHelpLifeSite', ['ui.router']);

selfHelpLifeSite.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('topics', {
    url: "/topics",
    templateUrl: "partials/topics.html",
    controller: 'TopicsCtrl'
  });

});
