#! /usr/bin/env/node
import inquirer from "inquirer";
//step 01
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        massage: "enter your first number" },
    { type: "number",
        name: "numberTwo",
        massage: "enter your second number" },
    { type: "list",
        name: "opertor",
        massage: "enter your opertor",
        choices: ["+", "-", "*", "/",] }
]);
//step 02
const { numberOne, numberTwo, opertor } = answers;
let result;
switch (opertor) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("Invalid operator");
}
console.log(`${numberOne} ${opertor} ${numberTwo} = ${result}`);
