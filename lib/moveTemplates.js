const path = require("path");
const fs = require("fs-extra");

const currentPath = path.join(__dirname, "../templates");
const destinationPath = process.cwd();

module.exports = {
  moveEjsCss: function () {
    const ejsPath = path.resolve(path.join(currentPath, "cssVer", "ejs"));
    fs.copy(ejsPath, destinationPath, (err) => {
      if (err) return console.error(err);
    });
  },
  moveHbsCss: function () {
    const hbsPath = path.resolve(path.join(currentPath, "cssVer", "hbs"));
    fs.copy(hbsPath, destinationPath, (err) => {
      if (err) return console.error(err);
    });
  },
  movePugCss: function () {
    const pugPath = path.resolve(path.join(currentPath, "cssVer", "pug"));
    fs.copy(pugPath, destinationPath, (err) => {
      if (err) return console.error(err);
    });
  },
  moveEjsSass: function () {
    const ejsPath = path.resolve(path.join(currentPath, "sassVer", "ejs"));
    fs.copy(ejsPath, destinationPath, (err) => {
      if (err) return console.error(err);
    });
  },
  moveHbsSass: function () {
    const hbsPath = path.resolve(path.join(currentPath, "sassVer", "hbs"));
    fs.copy(hbsPath, destinationPath, (err) => {
      if (err) return console.error(err);
    });
  },
  movePugSass: function () {
    const pugPath = path.resolve(path.join(currentPath, "sassVer", "pug"));
    fs.copy(pugPath, destinationPath, (err) => {
      if (err) return console.error(err);
    });
  }
}