import {
  setupInit as _setupInit,
  styleQuestions,
  installPackages,
} from "./inquirer";

import {
  initTemplates
} from "./templateHelper"

let template;
let styles;
let install;

export function setupInit() {
  _setupInit().then((answers) => {
    if (answers.setupQuestions) template = answers.setupQuestions;
    styleQuestions().then((answers) => {
      if (answers.styleQuestions) styles = answers.styleQuestions;
      installPackages().then((answers) => {
        if (answers.installPackages) install = answers.installPackages;
        initTemplates(template, styles, install);
      });
    });
  });
}
