Meteor.publish('ideas', function(author) {
  return Ideas.find();
});

Meteor.publish('allIdeas', function(author) {
  return Ideas.find({flagged: false, author: author});
});
