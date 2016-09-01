var shelljs = require("shelljs");

let nodeVersion = shelljs.exec("node -v",{silent:true}).stdout;

var sanatizedNodeVersion = /\n?v(.*)\n?\s*$/.exec(nodeVersion)[1];
console.log("Your node version is " + sanatizedNodeVersion);
console.log("Trying to install node typings in matching version...");
shelljs.exec("npm install @types/node@>=" + sanatizedNodeVersion);