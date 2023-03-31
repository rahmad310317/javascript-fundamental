class Person {

  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    console.log(`Hello ${name}, my name is ${this.name}`)
  }
}




const person = new Person('John');
person.sayHello('Jane'); // Hello Jane, my name is John
console.info(person.name); // John 