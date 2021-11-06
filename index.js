#!/usr/bin/env node
require = require("esm")(module /*, options*/);
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

clear();

console.log(
  chalk.blue(
    figlet.textSync("Express-MVC", { font: "Doom", horizontalLayout: "full" })
  )
);

require("./lib/files").isDirEmpty(process.cwd());
