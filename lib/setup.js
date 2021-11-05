const fs = require("fs-extra");
const path = require("path");

const inquirer = require("./inquirer");
const { spinnerStart } = require("./spinner");
const { message } = require("./messages");
const { installQuestions } = require("./install");

const currentPath = path.join(__dirname, "../templates");
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
          if (answers.checkUpdates)  install = answers.checkUpdates;
            if (template === "ejs" && styles === "css" && install === "yes") {
              return Promise.all([
                message(destinationPath),
                spinnerStart(),
                this.moveEjsCss(),
                installQuestions()
              ]).then().catch((err) => console.log(err.message));
            }
            return this.moveEjsCss();
        });
      });
    });
  },

  moveEjsCss: function () {
    const ejsPath = path.resolve(path.join(currentPath, "cssVer", "ejs"));
    fs.copy(ejsPath, destinationPath, (err) => {
      if (err) return console.error(err);
      // this.message();
    });
  },
  moveHbsCss: function () {
    const hbsPath = path.resolve(path.join(currentPath, "cssVer", "hbs"));
    fs.copy(hbsPath, destinationPath, (err) => {
      if (err) return console.error(err);
      // this.message();
    });
  },
  movePugCss: function () {
    const pugPath = path.resolve(path.join(currentPath, "cssVer", "pug"));
    fs.copy(pugPath, destinationPath, (err) => {
      if (err) return console.error(err);
      // this.message();
    });
  },
  moveEjsSass: function () {
    const ejsPath = path.resolve(path.join(currentPath, "sassVer", "ejs"));
    fs.copy(ejsPath, destinationPath, (err) => {
      if (err) return console.error(err);
      // this.message();
    });
  },
  moveHbsSass: function () {
    const hbsPath = path.resolve(path.join(currentPath, "sassVer", "hbs"));
    fs.copy(hbsPath, destinationPath, (err) => {
      if (err) return console.error(err);
      // this.message();
    });
  },
  movePugSass: function () {
    const pugPath = path.resolve(path.join(currentPath, "sassVer", "pug"));
    fs.copy(pugPath, destinationPath, (err) => {
      if (err) return console.error(err);
      // this.message();
    });
  }
};
