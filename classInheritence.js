class Employee {
  sayHello(name) {
    console.info(`Hello ${name}, I am ${this.name}`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.info(`Hello ${name}, I am ${this.name}`);
  }
}

const Rahmad = new Employee('Rahmad');
Rahmad.sayHello('Rahmad');

const Wahyu = new Manager('Wahyu');
Manager.sayHello('Wahyu');



console.info(Rahmad);
console.info(Wahyu);