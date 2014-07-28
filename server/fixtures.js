if (Ideas.find().count() === 0) {
  Ideas.insert({
    title: 'Clean Desk Policy in Offices',
    author: 'Johannes Merkel',
    url: 'http://sachagreif.com/introducing-telescope/',
    description: 'Keep office desks clean especially in MUC, enforce desk cleaing once a quarter'
  });
  Ideas.insert({
    title: 'BYOD',
    author: 'Johannes Merkel',
    url: 'http://meteor.com',
    description: 'Evaluate wether Bring Your Own Device is possible within IT support'
  });
  Ideas.insert({
    title: 'The Meteor Book',
    author: 'Johannes Merkel',
    url: 'http://themeteorbook.com'
  });
}
