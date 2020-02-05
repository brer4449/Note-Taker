const fs = require("fs");

//need classes for this assignment
class Store {
  constructor() {}
  readFile() {
    fs.readFile(`${__dirname}/db.json`, "utf8", (error, data) => {
      if (error) {
        throw Error(error);
      }
      console.log(data);
    });
  }
  writeFile() {
    fs.appendFile(`${__dirname}/db.json`, "blah", err => {
      if (err) {
        throw Error(err);
      }
    });
  }
  appendFile() {
    // fs.appendFile(`${__dirname}/db.json`, err => {
    //   if (err) {
    //     throw Error(err);
    //   }
    // });
  }
  deleteFromFile() {}
}

module.exports = Store;
