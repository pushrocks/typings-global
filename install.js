var shelljs = require("shelljs");
var semver = require("semver");

let nodeVersion = shelljs.exec("node -v",{silent:true}).stdout;

var sanatizedNodeVersion = /\n?v(.*)\n?\s*$/.exec(nodeVersion)[1];
console.log("Your node version is " + sanatizedNodeVersion);
console.log("Trying to install node typings in matching version...");

nodeMajorVersion = semver.major(sanatizedNodeVersion);
nodeNextVersion = nodeMajorVersion + 1;
shelljs.exec('npm install @types/node@">=' + nodeMajorVersion + '.0.0 <' +  nodeNextVersion + '.0.0"');