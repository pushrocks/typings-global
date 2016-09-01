'use strict';

var shelljs = require("shelljs");
var semver = require("semver");

var nodeVersion = shelljs.exec("node -v",{silent:true}).stdout;

var sanatizedNodeVersion = /\n?v(.*)\n?\s*$/.exec(nodeVersion)[1];
console.log("Your node version is " + sanatizedNodeVersion);
console.log("Trying to install node typings in matching version...");

var nodeMajorVersion = semver.major(sanatizedNodeVersion);
var nodeNextVersion = nodeMajorVersion + 1;
shelljs.exec('npm install @types/node@">=' + nodeMajorVersion + '.0.0 <' +  nodeNextVersion + '.0.0"');