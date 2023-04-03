class Employee {
  constructor(fistname) {
    this.fistname = fistname;
  }
  getName(name) {
    console.info(`Hello ${this.name}, my name is ${name}`);
  }
}
class Manager extends Employee {
  constructor(fistname, lastname) {
    super(fistname);
    this.lastname = lastname;
  }
  getName(name) {
    console.info(`Hello ${this.fistname}, my name is ${this.lastname}`);
  }

}

const fistname = new Manager('John', 'Rambo');
fistname.getName('John');

const lastname = new Employee('John', 'Doe');
lastname.getName('John');

// Path: superConstuctor.js