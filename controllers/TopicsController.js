selfHelpLifeSite.controller('TopicsCtrl', function TopicsCtrl($scope, TopicsFactory) {
  $scope.topics = TopicsFactory.topics;
  $scope.TopicsFactory = TopicsFactory;
});
