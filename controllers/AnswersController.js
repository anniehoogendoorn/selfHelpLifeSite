selfHelpLifeSite.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, TopicsFactory, UtilitiesFactory) {
  $scope.topic = UtilitiesFactory.findById(TopicsFactory.topics, $stateParams.topicId);
  // is this the right way to use $scope??
  $scope.topic.question = UtilitiesFactory.findById($scope.topic.questions, $stateParams.questionId);
  $scope.addAnswer = function() {
    $scope.topic.question.answers.push({ name: $scope.answerName });
    $scope.answerName = null;
  }
});
