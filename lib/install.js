import execa from "execa";
import Listr from "listr";
import chalk from "chalk";

export function execInstall(template) {
  const tasks = new Listr([
    {
      title: "Copy files",
      task: () => template,
    },
    {
      title: "Install npm-check-updates globally",
      task: () => execa("npm", ["i", "-g", "--silent", "npm-check-updates"],{ stdio: "inherit", shell: true }),
    },
    {
      title: "Check for updates",
      task: () => execa("ncu", ["-u", "-s"],{ stdio: "inherit", shell: true }),
    },
    {
      title: "Install Dependencies",
      task: () => execa("npm", ["i", "--silent"],{ stdio: "inherit", shell: true }),
    },
    {
      title: "Done",
      task: () => "",
    },
  ]);

  tasks.run().catch((err) => {
    console.error(chalk.redBright.bold(err));
  });
}

export function copyTemplate(template) {
  const tasks = new Listr([
    {
      title: "Copy files",
      task: () => template,
    },
    {
      title: "Done",
      task: () => "",
    },
  ]);

  tasks.run().catch((err) => {
    console.error(chalk.redBright.bold(err));
  });
}
