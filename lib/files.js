import { promises } from "fs-extra";

import { setupInit } from "./setup";

export async function isDirEmpty(dirname) {
  try {
    const files = await promises.readdir(dirname);
    if (files.length) {
      console.log("Directory is not empty. Please run this in an empty directory.");
      return process.exit();
    }
    setupInit();
  } catch (err) {
    return console.log(err);
  }
}