function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}!, My name is ${this.firstName} ${this.lastName}`)
  }
}

const Rahmad = new person("Rahmad", "Windi Simanullang");
Rahmad.sayHello("Fitri");

console.log(Rahmad);