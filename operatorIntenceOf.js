class Employee {

}

class manager {

}

const Rahmad = new Employee();
const Budi = new manager();


console.log(Rahmad instanceof Employee); // true
console.log(Budi instanceof manager); // true

console.log(Rahmad instanceof manager); // false
console.log(Budi instanceof Employee); // false
