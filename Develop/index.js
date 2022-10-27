// TODO: Include packages needed for this application
const Inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'firstName'
    },
    {
        type: 'input',
        message: 'What is your favorite food?',
        name: 'Food'
    },
    {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'Github'
    },
    {
        type: 'input',
        message: 'Where are you from?',
        name: 'Location'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    fs.writeFile('/Users/joe/test.txt', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}
    
// TODO: Create a function to initialize app
function init() {
    const fileName = 'README.md'
    Inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'firstName'
            },
            {
                type: 'input',
                message: 'What is your favorite food?',
                name: 'Food'
            },
            {
                type: 'input',
                message: 'What is your GitHub?',
                name: 'Github'
            },
            {
                type: 'input',
                message: 'Where are you from?',
                name: 'Location'
            } 
        ])
        .then((answer) => console.log(answer)
            
  );
}

// Function call to initialize app
init();
