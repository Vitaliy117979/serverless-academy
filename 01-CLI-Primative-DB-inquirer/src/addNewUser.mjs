import inquirer from "inquirer";
import { addUser } from "./workWithFile.mjs";
import { choiceOfAction } from "./choiceOfAction.mjs";
export const addNewUser = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "user",
        message: "Enter the user's name. To cancel, press ENTER",
      },
    ])
    .then(async ({ user }) => {
      if (user) {
        inquirer
          .prompt([
            {
              type: "list",
              name: "gender",
              message: "Select user's gender",
              choices: ["Male", "Female"],
            },
            {
              type: "input",
              name: "age",
              message: "Enter your age",
              validate: (age) => !isNaN(age),
            },
          ])
          .then(async ({ gender, age }) => {
            if (user) {
              await addUser({ user, gender, age });
              addNewUser()
            }
          });
      } else {
        choiceOfAction();
      }
    });
};
