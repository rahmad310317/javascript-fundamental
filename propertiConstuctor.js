function person() {
  this.firstName = "";
  this.lastName = "";
  this.sayHello = function (name) {
    console.info(`Hello ${name}!, My name is ${this.firstName} ${this.lastName}`)
  }
}

const Rahmad = new person();
Rahmad.firstName = "Rahmad";
Rahmad.sayHello("Fitri");


const Windi = new person();
Windi.lastName = "Windi";
const sayHello = new person();


console.log(Rahmad);
console.log(Windi);