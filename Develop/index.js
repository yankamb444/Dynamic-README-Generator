// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs-extra');
const generateMarkdown = require("./Utils/generateMarkdown")

// TODO: Create an array of questions for user input
// const questions = [];

const mainFunction = async function () {
    let answers;
    let badges;
    await inquirer.prompt([{
                name: 'title',
                message: 'What is the title of your project?',
                type: 'input',
            },

            {
                name: 'install',
                message: 'what packages did you need for this project',
                type: 'input',
            },
            {
                name: 'motivation',
                message: "What was your motivation for this project?",
                type: "input",
            },

            {
                name: "build",
                message: "Why did you build this project?",
                type: "input",
            },

            {
                name: "problem",
                message: "What problem does it solve?",
                type: "input",
            },

            {
                name: "license",
                message: "Please select a license",
                choices: ["MIT", "Eclipse", "GNU", "Mozilla", "None"],
                type: "list"
            },

        ])
        .then((userAnswers) => {
            answers = userAnswers
            const licenseBadge = {
                MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                Eclipse: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
                GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
                None: '',
              };

              badges = licenseBadge
         
        });
console.log(badges["Eclipse"])
console.log(answers.license)

    const readmeTemplate =
        `${answers.title}
  # Description
  ${answers.motivation}
  ${answers.build}
  ${answers.problem}
  # Installation
  ${answers.install}
  # Usage
  #Credits
  # License
  # Badges
  ${badges[answers.license]}`

  console.log(answers.title)

    // TODO: Create a function to write README file
    // function writeToFile(README, data) {}

    fs.writeFile("README.MD", readmeTemplate, (err) => {
        if (err) {
            console.log(err)
        }
    });
}

mainFunction()

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();