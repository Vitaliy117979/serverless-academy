const readline = require("readline");
const {
  sortWords,
  sortNumbersInDesc,
  sortNumbersInAsc,
  sortWordsByLength,
  uniqueElements,
} = require("./src/sort");
const {validationArray} = require("./src/validation")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputArray = [];

const sort = (input) => {
 return rl.question(
    "How would you like to sort the values?\n" +
      "1. Words by name(form A to Z)\n" +
      "2. Show  from the smallest\n" +
      "3. Show digits from the bigest\n" +
      "4. Word by quantity of leters\n" +
      "5. Only unique words\n" +
      "6. Display only unique values from the set of words and numbers entered by the user\n" +
      "7. To exit the program, enter 'exit'\n",
    (answer) => {
      switch (answer) {
        case "1":
          sortWords(input.filter((x) => isNaN(x)))
          break;
        case "2":
            sortNumbersInAsc(input.filter((x) => !isNaN(x)));
            break;
            case "3":
            sortNumbersInDesc(input.filter((x) => !isNaN(x)));
          break;
        case "4":
          sortWordsByLength(input.filter((x) => !isNaN(x)));
          break;
        case "5":
          uniqueElements(input.filter((x) => isNaN(x)));
          break;
          case "6":
            uniqueElements(input);
            break;
        case "exit":
          rl.close;
          break;
        default:
          console.log("Invalid option");
      }
      if (answer !== "exit") {
        sort(inputArray);
      }
    }
  );
};

const letsStartAgain = () =>
  rl.question(
    "Enter a few words or digits deviding them a spaces:",
    (answer) => {
      inputArray = answer.split(" ");
      if (validationArray(inputArray)) {
        sort(inputArray);
      } else {
        console.log(
          "Error: Please enter between 2 and 10 values separated by a space"
        );
        console.log("Do you want to try again? (yes/no)");
        rl.question("", (answer) => {
          if (answer === "yes") {
            letsStartAgain();
          } else {
            rl.close();
          }
        });
      }
    }
  );

letsStartAgain();
