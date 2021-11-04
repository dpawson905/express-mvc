const fs = require("fs-extra");
const path = require("path");
const mv = require("mv");

const inquirer = require("./inquirer");

const currentPath = path.join(__dirname, "../templates");
const destinationPath = process.cwd();
let template;

module.exports = {
  setupInit: function () {
    inquirer.setupInit().then((answers) => {
      if (answers.setupQuestions) template = answers.setupQuestions;
      inquirer.styleQuestions().then((answers) => {
        if (template === "ejs") {
          if (answers.styleQuestions === "css") return this.moveEjsCss();
          return this.moveEjsSass();
        }
        if (template === "hbs") {
          if (answers.styleQuestions === "css") return this.moveHbsCss();
          return this.moveHbsSass();
        }
        if (template === "pug") {
          if (answers.styleQuestions === "css") return this.movePugCss();
          return this.movePugSass();
        }
      });
    });
  },

  message: function () {
    console.log(
      `Files and folders have successfully been copied over to ${destinationPath}`
    );
  },

  moveEjsCss: function () {
    const ejsPath = currentPath + "\\cssVer\\ejs\\";
    fs.copy(ejsPath, destinationPath, (err) => {
      if (err) return console.error(err);
      this.message();
    });
  },
  moveHbsCss: function () {
    const ejsPath = currentPath + "\\cssVer\\hbs\\";
    fs.copy(ejsPath, destinationPath, (err) => {
      if (err) return console.error(err);
      this.message();
    });
  },
  movePugCss: function () {
    const ejsPath = currentPath + "\\cssVer\\pug\\";
    fs.copy(ejsPath, destinationPath, (err) => {
      if (err) return console.error(err);
      this.message();
    });
  },
  moveEjsSass: function () {
    const ejsPath = currentPath + "\\sassVer\\ejs\\";
    fs.copy(ejsPath, destinationPath, (err) => {
      if (err) return console.error(err);
      this.message();
    });
  },
  moveHbsSass: function () {
    const ejsPath = currentPath + "\\sassVer\\hbs\\";
    fs.copy(ejsPath, destinationPath, (err) => {
      if (err) return console.error(err);
      this.message();
    });
  },
  movePugSass: function () {
    const ejsPath = currentPath + "\\sassVer\\pug\\";
    fs.copy(ejsPath, destinationPath, (err) => {
      if (err) return console.error(err);
      this.message();
    });
  }
};
