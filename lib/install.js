const { exec } = require("child_process");

const { spinnerStop } = require("./spinner");

module.exports = {
  installQuestions: function () {
    const execInstall = function () {
      exec("npm i", (error, stdout, stderr) => {
        if (error) {
          console.log(`\nerror: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`\nstderr: ${stderr}`);
          return;
        }
        console.log(`\n${stdout}`);
        spinnerStop();
        console.log("Packages updated and installed");
      });
    };
    return execInstall();
  },
};
