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
};
