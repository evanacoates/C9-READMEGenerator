// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
    message:"What is your project titled?",
    name:"title",
    },
    {
        type: "input",
    message:"How would you describe your application?",
    name:"description",
    },
    {type: "input",
    message:"How is your application installed?",
    name:"installation",
    },
    {
    type: "input",
    message:"How is our application used?",
    name:"usage",
    },
    {
    type: "input",
    message:"Who contributed to the application?",
    name:"contributions",
    },
    {
    type: "input",
    message:"What are the test instructions for your application?",
    name:"tests",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
