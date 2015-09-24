selfHelpLifeSite.factory('TopicsFactory', function TopicsFactory() {
  var factory = {};
  factory.topics = [];
  factory.addTopic = function() {
    factory.topics.push({ name: factory.topicName,
                          id: factory.topics.length + 1,
                          questions: [] });
    factory.topicName = null;
  };

  return factory;
});
