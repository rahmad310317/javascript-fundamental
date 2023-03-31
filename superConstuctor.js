
class Employee {
  constructor(name) {
    this.name = name;
  }
  getName(name) {
    console.info(`Hello ${this.name}, my name is ${name}`);
  }

}

class Manager extends Employee {
  constructor(name) {
    super(name);
  }
  getName(name) {
    console.info(`Hello ${this.name}, my name is ${name}`);
  }

}

const manager = new Manager('John');
manager.getName('John');