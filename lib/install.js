import execa from "execa";
import Listr from "listr";

export function execInstall(template) {
  const tasks = new Listr([
    {
      title: "Copy files",
      task: () => template,
    },
    {
      title: "Install Dependencies",
      task: () => execa("npm", ["i"]),
    },
    {
      title: "Done",
      task: () => "",
    },
  ]);

  tasks.run().catch((err) => {
    console.error(err);
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
    console.error(err);
  });
}
