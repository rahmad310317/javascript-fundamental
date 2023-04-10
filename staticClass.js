class Configuration {
  static name = "JavaScript OPP"
  static version = "1.0.0"
  static author = "Rahmad Windi Simanullang"
}

const config = new Configuration();
console.info(Configuration.name); // undefined
console.info(Configuration.version); // undefined
console.info(Configuration.author); // undefined