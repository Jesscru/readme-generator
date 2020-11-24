const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a brief description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Provide instructions for how one installs your project',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Describe how and for what will the user use your project.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Did anyone or anything else that contribute to your project?',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'Can others contribute to your project? If so, how would you like them to go about doing so?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Provide an example or two of how the user can run your project.',
            name: 'tests',
        },
        {
            type: 'checkbox',
            message: 'What type of licesnse will your project need?',
            name: 'license',
            choices: ['BSD', 'GPL', 'MIT'],
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your Github link?',
            name: 'link',
        },
        {
            type: 'input',
            message: 'What it your email address?',
            name: 'email',
        },
    ]


// // function to write README file
function writeToFile(fileType, data) {
    fs.writeFile('yourREADME.md', data, function(err) {
        err ? console.error(err) : console.log(`Success! Your README.md is ready!`)
    });
}

// // function to initialize program
function init(fileType) {
    inquirer.prompt(questions) 
        .then(function(data){
            writeToFile('yourREADME.md' + fileType, generateMarkdown(data))
    })
}   

// // function call to initialize program
init();


