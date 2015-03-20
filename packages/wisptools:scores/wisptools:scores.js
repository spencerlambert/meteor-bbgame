// We only have server side code in this package.
if (Meteor.isServer) {
  // Create the class we will be exporting.
  var Score = {};
  // Initialize the server side vars.
  Score.scores = {home: 0, away: 0};
  // Use our npm package for sending messages to the publish, so we can transmit changes.
  var ee = Npm.require("event-emitter");
  Score.events = ee({});

  // Publish the scores
  Meteor.publish('scores', function() {
    var self = this;
    // Init the values
    self.added('scores', 'home', {score: Score.scores.home});
    self.added('scores', 'away', {score: Score.scores.away});
    // Done with init and ready to start sending data.
    self.ready();

    // Callback function that gets called via the emit inside the Meteor.methods
    var callback = function() {
      // Notify the subscriptions that data was changed.
      self.changed('scores', 'home', {score: Score.scores.home});
      self.changed('scores', 'away', {score: Score.scores.away});
      //console.log("Score Changed!");     
    }

    // Listen for events from Meteor.methods calls
    Score.events.on('scoreUpdate', callback);

    // If the subscription stops, then remove the listener.
    self.onStop(function() {
      Score.events.off('scoreUpdate', callback);
    });

  });

  // The methods that get called when buttons are clicked.
  Meteor.methods({
    plusHome: function (num) {
      Score.scores.home += num; // Update home score.
      Score.events.emit('scoreUpdate'); // Transmit that the score was changed.
    },
    plusAway: function (num) {
      Score.scores.away += num; // Update away score.
      Score.events.emit('scoreUpdate'); // Transmit that the score was changed.
    },
    reset: function (num) {
      // Set both scores to zero.
      Score.scores.home = 0;
      Score.scores.away = 0;
      Score.events.emit('scoreUpdate'); // Transmit that the score was changed.
    }        
  });

}
