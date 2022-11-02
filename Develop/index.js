// TODO: Include packages needed for this application
const Inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is project title?',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'Enter a description for your porject',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project',
        name: 'installationInstructions'
    },
    {
        type: 'input',
        message: 'Enter usage information for your project',
        name: 'usageInformation'
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines for your project',
        name: 'contributionGuidelines'
    },
    {
        type: 'input',
        message: 'Enter test instructions for your project',
        name: 'testInstructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like?',
        choices: ['MIT', 'Other', 'GPLv2', 'Apache'],
    }
];

// TODO: Create a function to write README file

function writeToFile(fileName, answer) {
    const {Title, Description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, license} = answer;
 
    var licenseLogo = function (license){
        
        switch(license) {
            case 'MIT':
                return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            case 'Other':
                return 'Other';
            case 'GPLv2':
                return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
            case 'Apache':
                return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            default:
                return 'N/A'
        } 
      }
    console.log(license);
    // console.log(fileName);
    let content = 
        `# ${Title}


## Description
${Description}
        
## Installation Instructions
${installationInstructions}
       
## Usage
${usageInformation}
        
## Contribution Guidelines
${contributionGuidelines}
        
## Test Instructions
${testInstructions}
        
## License
 ${licenseLogo(license)}`
 
    fs.writeFile('TEST.md', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
        console.log('success')
      });
}
    
// TODO: Create a function to initialize app
function init() {
    const fileName = 'README2.md'
    Inquirer
        .prompt(questions)
        .then((answer) => 
            
        writeToFile(fileName, answer)
            
            
  );
}

// Function call to initialize app
init();
