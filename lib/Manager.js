const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
        getofficeNumber(){
            return this.officeNumber;
        }
    getrole(){
        return this.role;
    }
}

module.exports = Manager