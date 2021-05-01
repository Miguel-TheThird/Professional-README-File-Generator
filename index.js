const inquirer = require("inquirer");
const fs = require("fs");


let mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
let apacheBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
let gnuBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
let iscBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
let mozillaBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
let openDataBadge = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"

inquirer.prompt([
    {
        name: "title",
        type: "input",
        message: "What is the project title?",
    },
    {
        name: "license",
        type: "checkbox",
        message: "Chose a license or licenses for this project:",
        choices: ["MIT","Apache","GNU","ISC","Mozilla","OpenData"]
    },
    {
        name: "description",
        type: "input",
        message: "Write a description of your project:"
    },
    {
        name: "installation",
        type: "input",
        message: "Describe the installation process if any:",

    },
    {
        name: "usage",
        type: "input",
        message: "How to use the program?"
    },
    {
        name: "contributing",
        type: "input",
        message: "Write names of contributors of this projects?"
    },
    {
        name: "tests",
        type: "input",
        message: "Is there a test included?"
    },
    {
        name: "questions",
        type: "input",
        message: "Please enter your GitHub username:"
    },
    {
        name: "email",
        type: "input",
        message: "Please enter your email: "
    }
])

.then((answers) => {
    fs.writeFile("readme.md","# "+answers.title+"\n"+"\n",(error)=>  //Create a .md file and attach project's name at the top
    error ? console.log(error) : console.log("Yess"))

    if(answers.license){
        let licenses = answers.license
        getLicenses(licenses)                         //Go out of this scope to render licenses
        continueRendering()                           //Comeback to this scope by using this function
    }

    function continueRendering(){
    if(answers.description){
        fs.appendFile("readme.md"," \n"+"\n"+"## Description"+"\n" + answers.description,(error)=>console.log(error))}
    
    
    
    
    









}});//The last brackets
 
function getLicenses(licenses){
    if(licenses[0]){
        fs.appendFile("readme.md", mitBadge,(error)=>console.log(error))}
    if(licenses[1]){
        fs.appendFile("readme.md", apacheBadge,(error)=>console.log(error))}
            
    if(licenses[2]){
        fs.appendFile("readme.md", gnuBadge,(error)=>console.log(error))}
            
    if(licenses[3]){
        fs.appendFile("readme.md", iscBadge,(error)=>console.log(error))}
            
    if(licenses[4]){
        fs.appendFile("readme.md", mozillaBadge,(error)=>console.log(error))}
           
    if(licenses[5]){
        fs.appendFile("readme.md", openDataBadge,(error)=>console.log(error))}
    }







