import inquirer from "inquirer";
import { getAllUsers } from "./workWithFile.mjs";
import { findUserByName } from "./findUserByName.mjs";

export const choiceOfAction = async () => {
    const userData = await inquirer
      .prompt([
        {
          type: "confirm",
          name: "searchUser",
          message: " Would you to search values in DB?",
        },
      ])
      .then(async ({ searchUser }) => {
        if (searchUser) {
          console.log(await getAllUsers());
          return findUserByName();
        } else {
          console.log("Have a good day!");
        }
      });
  };