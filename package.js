/* Meteor package information for package Dockerode*/
Package.describe({
  name: "ongoworks:dockerode",
  summary: "Docker remote API. Wraps the dockerode package for Meteor.",
  version: "0.1.4",
  git: "https://github.com/ongoworks/meteor-dockerode"
});

Npm.depends({
  "dockerode": "2.0.6"
});

Package.on_use(function (api) {
  api.export('Docker');
  api.add_files('dockerode.js', 'server');
});
