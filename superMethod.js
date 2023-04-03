class Cicle {
  sayhello() {
    console.log("Hello Cicle")
  }
}

class Shape extends Cicle {

  sayhello() {
    super.sayhello();
    console.log("Hello Shape")
  }
}

const shape = new Shape();
shape.sayhello();