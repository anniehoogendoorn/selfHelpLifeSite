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

  $stateProvider.state('topics.questions', {
    url: "/:topicId",
    templateUrl: "partials/topics.questions.html",
    controller: 'QuestionsCtrl'
  });

  $stateProvider.state('topics.questions.answers', {
    url: "/:questionId",
    templateUrl: "partials/topics.questions.answers.html",
    controller: 'AnswersCtrl'
  });

});
