import { join, resolve } from "path";
import { copy } from "fs-extra";

const currentPath = join(__dirname, "../templates");
const destinationPath = process.cwd();

export function moveEjsCss() {
  const ejsPath = resolve(join(currentPath, "cssVer", "ejs"));
  return copy(ejsPath, destinationPath, (err) => {
    if (err) return console.error(err);
  });
}
export function moveHbsCss() {
  const hbsPath = resolve(join(currentPath, "cssVer", "hbs"));
  return copy(hbsPath, destinationPath, (err) => {
    if (err) return console.error(err);
  });
}
export function movePugCss() {
  const pugPath = resolve(join(currentPath, "cssVer", "pug"));
  return copy(pugPath, destinationPath, (err) => {
    if (err) return console.error(err);
  });
}
export function moveEjsSass() {
  const ejsPath = resolve(join(currentPath, "sassVer", "ejs"));
  return copy(ejsPath, destinationPath, (err) => {
    if (err) return console.error(err);
  });
}
export function moveHbsSass() {
  const hbsPath = resolve(join(currentPath, "sassVer", "hbs"));
  return copy(hbsPath, destinationPath, (err) => {
    if (err) return console.error(err);
  });
}
export function movePugSass() {
  const pugPath = resolve(join(currentPath, "sassVer", "pug"));
  return copy(pugPath, destinationPath, (err) => {
    if (err) return console.error(err);
  });
}
