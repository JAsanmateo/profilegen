const inquirer = require("inquirer");
// const jest = require("jest");
// const express = require("express")

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your current role?',
        choices: ["Employee", "Engineer","Intern","Manager"],
        default: ["Employee"]
      },
  ]).then(function(data){
    switch(data.role){
      case "Engineer"
      addManager()
      break
      case "Intern"
      addIntern()
      break
      case "Manager"
    } 
  })

  // // .then(answers => {
  //   const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
  //   teamArray.push(intern);
  //   createTeam();


  