#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const setup = require("./lib/setup");

clear();

console.log(
  chalk.blue(
    figlet.textSync("Express-MVC", { font: "Doom", horizontalLayout: "full" })
  )
);

try {
  setup.setupInit();
} catch (err) {
  console.log(err.message);
  process.exit();
}
