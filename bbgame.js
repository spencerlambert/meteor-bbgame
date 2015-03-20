if (Meteor.isClient) {
  // This is not a real database, so we are only using this for the minimongo features.
  Scores = new Mongo.Collection('scores');
  // Subscriber to the Server Side Variables.
  Meteor.subscribe('scores');

  Template.scoreboard.helpers({
    homeScore: function () {
      var rec = Scores.findOne({_id: 'home'});
      return rec.score;
    },
    awayScore: function () {
      var rec = Scores.findOne({_id: 'away'});
      return rec.score;
    }    
  });

  // Listen to the button clicks.
  // I'm sure there is a cleaner way of doing this. I don't like repeating out the call for 1, 2 and 3.
  Template.scoreboard.events({
    'click .add-home-1': function (e) {
      Meteor.call('plusHome', 1);
    },
    'click .add-home-2': function (e) {
      Meteor.call('plusHome', 2);
    },
    'click .add-home-3': function (e) {
      Meteor.call('plusHome', 3);
    },
    'click .add-away-1': function (e) {
      Meteor.call('plusAway', 1);
    },
    'click .add-away-2': function (e) {
      Meteor.call('plusAway', 2);
    },
    'click .add-away-3': function (e) {
      Meteor.call('plusAway', 3);
    },
    'click .reset': function (e) {
      Meteor.call('reset');
    }    
  });
}
