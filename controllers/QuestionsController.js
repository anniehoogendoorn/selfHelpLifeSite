selfHelpLifeSite.controller('QuestionsCtrl', function QuestionsCtrl($scope, $stateParams, TopicsFactory, UtilitiesFactory) {
  $scope.topic = UtilitiesFactory.findById(TopicsFactory.topics, $stateParams.topicId)
  $scope.addQuestion = function() {
    $scope.topic.questions.push({ name: $scope.questionName,
                                  id: $scope.topic.questions.length + 1,
                                  answers: []
                                  });
                                  console.log($scope.topic.questions);

    $scope.questionName = null;
  }
});
