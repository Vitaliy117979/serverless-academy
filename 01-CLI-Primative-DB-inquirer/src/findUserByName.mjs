import inquirer from "inquirer";
import { getUserByName,  } from "./workWithFile.mjs";

export const findUserByName = async () => {
  const userData = await inquirer.prompt([
    {
      type: "input",
      name: "user",
      message: "Enter user`s name you wanna find in DB",
    },
  ]);
  await getUserByName(userData.user);
};


