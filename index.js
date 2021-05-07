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
    }])
.then(answers => {
    fs.writeFile("readme.md","# "+answers.title+"\n"+"\n",(error)=>{  //Create a .md file and attach project's name at the top
    if(answers.title){
        license();
    }
    if(error){
        console.log()
     } else{
         console.error()
     }
  })})

function license(){
inquirer.prompt([
    {
        name: "license",
        type: "checkbox",
        message: "Chose a license or licenses for this project:",
        choices: ["MIT","Apache","GNU","ISC","Mozilla","OpenData"]
    }])

.then(answers => {
    if(answers.license){
        description();
        let licenses = answers.license

    if(licenses[0]){
        fs.appendFile("readme.md", mitBadge+" ",(error)=>{if(error) throw err;})}
    if(licenses[1]){
        fs.appendFile("readme.md", apacheBadge+" ",(error)=>{if(error) throw err;})}
            
    if(licenses[2]){
        fs.appendFile("readme.md", gnuBadge+" ",(error)=>{if(error) throw err;})}
            
    if(licenses[3]){
        fs.appendFile("readme.md", iscBadge+" ",(error)=>{if(error) throw err;})}
            
    if(licenses[4]){
        fs.appendFile("readme.md", mozillaBadge+" ",(error)=>{if(error) throw err;})}
           
    if(licenses[5]){
        fs.appendFile("readme.md", openDataBadge+" ",(error)=>{if(error) throw err;})}}
  })
}

function description(){
inquirer.prompt([
    {
        name: "description",
        type: "editor",
        message: "Write a description of your project:"
    }])
.then(answers => {
    if(answers.description){
        fs.appendFile("readme.md"," \n"+"\n"+"## Description"+"\n"+answers.description+"\n"+
        "## Table of content"+"\n"+
        "- [Description](#Description)"+"\n"+
        "- [Installation](#Installation)"+"\n"+
        "- [Usage](#Usage)"+"\n"+
        "- [Test](#Test)"+"\n"+
        "- [Contributors](#Contributors)"+"\n"+
        "- [Questions](#Questions)"+"\n",(error)=>{if(error) throw err;})
    installation();
    }
  })
}

function installation(){
inquirer.prompt([
    {
        name: "installation",
        type: "editor",
        message: "Describe the installation process if any:"
    }])
.then(answers => {
    if(answers.installation){ 
        fs.appendFile("readme.md"," \n"+"\n"+"## Installation"+"\n" + answers.installation,(error)=>{if(error) throw err;})
    usage();
    }
  })
}

function usage(){
inquirer.prompt([
    {
        name: "usage",
        type: "editor",
        message: "How to use the program?"
    }])
.then(answers => {
    if(answers.usage){
        fs.appendFile("readme.md"," \n"+"\n"+"## Usage"+"\n" + answers.usage,(error)=>{if(error) throw err;})
    test();
    } 
  })
}

function test(){
inquirer.prompt([
    {
        name: "tests",
        type: "input",
        message: "Is there a test included?"
    }])
.then(answers => {
    if(answers.tests){
        fs.appendFile("readme.md"," \n"+"\n"+"## Test"+"\n" + answers.tests,(error)=>{if(error) throw err;})
    contributing();
    }
  })
}

function contributing(){
inquirer.prompt([
    {
        name: "contributing",
        type: "editor",
        message: "Write names of contributors for this projects?"
    }])
.then(answers => {
    if(answers.contributing){
        fs.appendFile("readme.md"," \n"+"\n"+"## Contributors"+"\n" + answers.contributing,(error)=>{if(error) throw err;})
    }
    if(answers.contributing){
        questions();
    }
  })
}

function questions(){
inquirer.prompt([
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
.then(answers => {
    if(answers.questions){
        fs.appendFile("readme.md"," \n"+"\n"+"## Questions"+"\n"+
                 "Find me on GitHub: " + "["+answers.questions+"]"+"(https://github.com/"+answers.questions+")",(error)=>{if(error) throw err;})
        }
    if(answers.email){
        fs.appendFile("readme.md"," \n"+"\n"+"## Email"+"\n"+
        "["+answers.email+"]"+"(mailto:"+answers.email+")" ,(error)=>console.log("ReadMe file was made check your directory!"))}
  })
}




 
        


