Package.describe({
  name: 'wisptools:scores',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('wisptools:scores.js');
  api.use([
    'meteor'
  ]);
  api.export('Score');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('wisptools:scores');
  api.addFiles('wisptools:scores-tests.js');
});

Npm.depends({
  'event-emitter': "0.3.3"
});