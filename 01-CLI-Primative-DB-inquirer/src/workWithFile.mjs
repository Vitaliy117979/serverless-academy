import fs from "fs/promises";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "../data.txt");
export const getAllUsers = async () => {
  const users = await fs.readFile(filePath, "utf-8");
  if (!users) {
    return null;
  }
  return JSON.parse(users);
};

export const getUserByName = async (name) => {
  const allUsers = await getAllUsers();
  const user = allUsers.filter(
    (user) => user.user.toLowerCase() === name.toLowerCase()
  );
  if (!user.length) {
    return console.log("This user is`t in our DB");
  }
  return console.log(user);
};

export const addUser = async (date) => {
  const users = await getAllUsers();
  if (!users) {
    const newUsersArray = [date];
    console.log(newUsersArray);
    return await fs.writeFile(filePath, JSON.stringify(newUsersArray));
  } else {
    users.push(date);

    await fs.writeFile(filePath, JSON.stringify(users));
    return date;
  }
};
