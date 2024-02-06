// Import inquirer and fs with ESM syntax
import inquirer from 'inquirer';
import fs from 'fs';
import { promisify } from 'util';

// Promisify writeFile for use with async/await
const writeFileAsync = promisify(fs.writeFile);

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can your project be tested?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// Function to write README file using async/await
async function writeToFile(fileName, data) {
    try {
        await writeFileAsync(fileName, data);
        console.log('Successfully created README.md!');
    } catch (err) {
        console.error(err);
    }
}

// Function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}) or visit my GitHub profile at [${data.github}](https://github.com/${data.github}).
    `;
}