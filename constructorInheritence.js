function member(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}!, My name is ${this.firstName} ${this.lastName}`)
  }
}

function employee(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  member.call(this, firstName, lastName);

}

const name = new employee("Rahmad", "Windi Simanullang");
console.info(name);