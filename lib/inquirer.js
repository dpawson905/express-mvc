const inquirer = require("inquirer");

module.exports = {
  setupInit: function () {
    const setupQuestions = {
      type: "list",
      name: "setupQuestions",
      message: "What template engine do you use?",
      choices: ["ejs", "pug", "hbs"],
      default: "ejs",
    };
    return inquirer.prompt(setupQuestions);
  },

  styleQuestions: function () {
    const styleQuestions = {
      type: "list",
      name: "styleQuestions",
      message: "Do you want css stylesheets or sass?",
      choices: ["css", "sass"],
      default: "css",
    };
    return inquirer.prompt(styleQuestions);
  },

  checkUpdates: function () {
    const checkUpdates = {
      type: "list",
      name: "checkUpdates",
      message: "Do you want to install packages?",
      choices: ["yes", "no"],
      default: "yes",
    };
    return inquirer.prompt(checkUpdates);
  },

  installNCU: function () {
    const installNCU = {
      type: "list",
      name: "installNCU",
      message:
        "Do you want to install npm-check-updates? (This checks your package.json file and updates dependencies)",
      choices: ["yes", "no"],
      default: "yes",
    };
    return inquirer.prompt(installNCU);
  },
};
