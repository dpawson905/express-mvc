import { prompt } from "inquirer";

export function setupInit() {
  const setupQuestions = {
    type: "list",
    name: "setupQuestions",
    message: "What template engine do you use?",
    choices: ["ejs", "pug", "hbs"],
    default: "ejs",
  };
  return prompt(setupQuestions);
}
export function styleQuestions() {
  const styleQuestions = {
    type: "list",
    name: "styleQuestions",
    message: "Do you want css stylesheets or sass?",
    choices: ["css", "sass"],
    default: "css",
  };
  return prompt(styleQuestions);
}
export function installPackages() {
  const installPackages = {
    type: "list",
    name: "installPackages",
    message: "Do you want to install packages?",
    choices: ["yes", "no"],
    default: "yes",
  };
  return prompt(installPackages);
}
