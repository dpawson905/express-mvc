const Spinner = require("cli-spinner").Spinner;

let spinner;

module.exports = {
  spinnerStart: function () {
    spinner = new Spinner("Installing packages... %s");
    spinner.setSpinnerString("|/-\\");
    spinner.start();
  },

  spinnerStop: function () {
    spinner.stop();
  },
};
