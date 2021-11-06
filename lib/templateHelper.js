import {
  moveEjsCss,
  moveHbsCss,
  movePugCss,
  moveEjsSass,
  moveHbsSass,
  movePugSass,
} from "./copyTemplates";
import { execInstall, copyTemplate } from "./install";

export function initTemplates(template, styles, install) {
  if (template === "ejs" && styles === "css" && install === "yes") {
    return execInstall(moveEjsCss());
  } else if (template === "ejs" && styles === "css" && install === "no") {
    return copyTemplate(moveEjsCss());
  } else if (
    template === "hbs" &&
    styles === "css" &&
    install === "yes"
  ) {
    return execInstall(moveHbsCss());
  } else if (template === "hbs" && styles === "css" && install === "no") {
    return copyTemplate(moveHbsCss());
  } else if (
    template === "pug" &&
    styles === "css" &&
    install === "yes"
  ) {
    return execInstall(movePugCss());
  } else if (template === "pug" && styles === "css" && install === "no") {
    return copyTemplate(movePugCss());
  }

  if (template === "ejs" && styles === "sass" && install === "yes") {
    return execInstall(moveEjsSass());
  } else if (
    template === "ejs" &&
    styles === "sass" &&
    install === "no"
  ) {
    return copyTemplate(moveEjsSass());
  } else if (
    template === "hbs" &&
    styles === "sass" &&
    install === "yes"
  ) {
    return execInstall(moveHbsSass());
  } else if (
    template === "hbs" &&
    styles === "sass" &&
    install === "no"
  ) {
    return copyTemplate(moveHbsSass());
  } else if (
    template === "pug" &&
    styles === "sass" &&
    install === "yes"
  ) {
    return execInstall(movePugSass());
  } else if (
    template === "pug" &&
    styles === "sass" &&
    install === "no"
  ) {
    return copyTemplate(movePugSass());
  }
}