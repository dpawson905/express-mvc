const inquirer = require("./inquirer");
const { spinnerStart } = require("./spinner");
const { message } = require("./messages");
const { installQuestions } = require("./install");
const {
  moveEjsCss,
  moveHbsCss,
  movePugCss,
  moveEjsSass,
  moveHbsSass,
  movePugSass,
} = require("./moveTemplates");

const destinationPath = process.cwd();
let template;
let styles;
let install;

module.exports = {
  setupInit: function () {
    inquirer.setupInit().then((answers) => {
      if (answers.setupQuestions) template = answers.setupQuestions;
      inquirer.styleQuestions().then((answers) => {
        if (answers.styleQuestions) styles = answers.styleQuestions;
        inquirer.checkUpdates().then((answers, done) => {
          if (answers.checkUpdates) install = answers.checkUpdates;
          if (template === "ejs" && styles === "css" && install === "yes") {
            return Promise.all([
              message(destinationPath),
              spinnerStart(),
              moveEjsCss(),
              installQuestions(),
            ])
              .then()
              .catch((err) => console.log(err.message));
          }
          return this.moveEjsCss();
        });
      });
    });
  },
};
