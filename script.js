const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { arrayBuffer } = require("stream/consumers");

const employees = [];

const writeFile = util.promisify(fs.writeFile);

const obj = new Employee("edward", 34, "eddivaughan");

async function promptUser() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email?",
    },
    {
      type: "list",
      name: "role",
      message: "What is the employee's role?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ];

  const answers = await inquirer.prompt(questions);

  switch (answers.role) {
    case "Manager":
      const managerAnswers = await inquirer.prompt({
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      });
      employees.push(
        new Manager(
          answers.name,
          answers.id,
          answers.email,
          managerAnswers.officeNumber
        )
      );
      break;
    case "Engineer":
      const engineerAnswers = await inquirer.prompt({
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      });
      employees.push(
        new Engineer(
          answers.name,
          answers.id,
          answers.email,
          engineerAnswers.github
        )
      );
      break;
    case "Intern":
      const internAnswers = await inquirer.prompt({
        type: "input",
        name: "school",
        message: "What school did the intern go to?",
      });
      employees.push(
        new Intern(
          answers.name,
          answers.id,
          answers.email,
          internAnswers.school
        )
      );
      break;
    default:
      console.log("default");
  }

  const { isCorrect } = await inquirer.prompt({
    type: "confirm",
    name: "isCorrect",
    message: "Would you like to add an additional employee",
    default: false,
  });

  if (isCorrect) {
    promptUser();
  } else {
    employees.forEach(myFunction);

    let html = `<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width", initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="./assets/stylesheet.css" />
    </head>
    <body>
      <div>
        <nav>
          <h1>My Team</h1>
        </nav>
        <div>
          <div class="card-content">${returnCard(cardArr)}</div>
        </div>
      </div>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="./employee.js"></script>
    </html>`;
    await fs.writeFile("employeelist.html", html, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  console.log(employees);
}

const cardArr = [];

function myFunction(i) {
  let name = i.name;
  let id = i.id;
  let email = i.email;
  if (i.school) {
    var variable = `School: ${i.school}`;
    var role = "intern";
  } else if (i.github) {
    var variable = `Github: ${i.github}`;
    var role = "engineer";
    var variableLink = `https://github.com/${i.github}/`;
  } else if (i.officeNumber) {
    var role = "manager";
    var variable = `Office number: ${i.officeNumber}`;
  }
  let card = `<div class="card">
      <div class="top-half">
        <h3 class="name">${name}</h3>
        <h3 class="position">${role}</h3>
      </div>
      <div>
        <ul>
          <li class="id">Id: ${id}</li>
          <li class="email"><a href = "mailto: ${email}">Email: ${email}</a></li>
          <li class="variableEl"><a href = "${variableLink}">${variable}</a></li>
        </ul>
      </div>
    </div> `;

  cardArr.push(card);
}

let returnCard = function (arr) {
  return arr.join(" ");
};

promptUser();
