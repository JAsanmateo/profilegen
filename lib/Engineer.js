const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor (name, id, email, officeNumber){
        super(name,id,email);
        this.gitHub = gitHub;
        this.role = "Engineer";
    }
        getgitHub(){
            return this.gitHub;
        }
    getrole(){
        return this.role;
    }
}

module.exports.Engineer