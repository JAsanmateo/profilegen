class Employee {
  constructor(name,id,email,role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role||"employee";
  }
  getname(){
      return this.name;
  };
  getid(){
      return this.id;
  };
  getemail(){
  return this.email;
  };
  getrole(){
      return "employee";
  };     
}

module.exports = Employee;