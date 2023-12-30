// Require inquirer 
const inquirer = require('inquirer');
const fs = require('fs');

// Create questions 
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Project title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'License?',
    choices: ['MIT', 'GPL', 'Apache']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe install process:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is it used?'
  },
  {
    type: 'input',
    name: 'username',
    message: 'GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Your email address:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contributing guidelines:'
  }
];

// Call inquirer prompts
inquirer.prompt(questions).then(answers => {

  // Take user responses    
  const title = answers.title;
  const description = answers.description;

  // Build README content
  const readme =
    `
  # Table of Contents

  * [Professional README Generator](#professional-readme-generator)
  * [Description](#description)
  * [Installation](#innodestallation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  # ${answers.title}
  [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)]
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage 
  ${answers.usage}
  

  ## Contributing

  ${answers.contributing}
  
  ## Questions
  
  Questions? Contact me at [${answers.email}](mailto:${answers.email})
  
  `;

  // Write to file
  fs.writeFile('README.md', readme, (err) => {
    if (err) throw err;
    console.log('README created!');
  });

});