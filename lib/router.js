Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('ideas'); }
});

Router.map(function() {
  this.route('ideasList', {path: '/'});

  this.route('ideaPage', {
    path: '/ideas/:_id',
    data: function() { return Ideas.findOne(this.params._id); }
  });
});

Router.onBeforeAction('loading');
