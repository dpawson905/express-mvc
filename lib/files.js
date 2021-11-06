import { promises } from "fs-extra";
import chalk from "chalk";
import { setupInit } from "./setup";

export async function isDirEmpty(dirname) {
  try {
    const files = await promises.readdir(dirname);
    if (files.length) {
      console.log(chalk.redBright.bold("\nDirectory is not empty. Please run this in an empty directory."));
      return process.exit();
    }
    setupInit();
  } catch (err) {
    return console.log(chalk.redBright.bold(err));
  }
}