# Goals

1. Implementing a Meteor.publish on something other than a MongoDB and making it reactive.
2. Building a standalone browser app that is decoupled from Meteor.
3. Making a reactive AngularJS app that subscribers to a Meteor server over DDP.

## Summary

This is a simple Meteor app that publishes a score of a basket ball game.  It's unique in that the score is tracked as a server side object, rather than a MongoDB, showing an example of how you can publish any data over Meteor's DDP.  

The files in the public folder are an example of how to subscribe to the game scores using browser javascript, demo'ing that the client can be fully decoupled from Meteor. 

## 1. Meteor.publish Server Side Variables

The wisptools:scores package sets up a Meteor.publish that exposes a JSON object that is maintained on the Meteor Server.  It creates a few Meteor.methods for updating the score. The [npm event-emitter](https://www.npmjs.com/package/event-emitter) package is used to send Meteor.publish notifications when the values have changed.

## 2. Decoupled from Meteor

[Asteroid](https://github.com/mondora/asteroid) was used as a DDP client to subscriber to the score changes.  The standalone file that has been decoupled from Meteor is: [public/score.html](https://github.com/spencerlambert/meteor-bbgame/blob/master/public/score.html)

## 3. Meteor and AngularJS

It was simple to use asteroid inside an Angular Controller.  You'll find this code in public/score.html as well.
