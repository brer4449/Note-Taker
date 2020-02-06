const fs = require("fs");
const path = require("path");

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
    let data = JSON.stringify(this.readFile());
    console.log(data);
    console.log(typeof data);
    fs.writeFile(
      path.join(__dirname, "/db.json"),
      JSON.stringify("fuck you"),
      err => {
        if (err) {
          throw Error(err);
        }
      }
    );
  }

  appendFile() {
    fs.appendFile(`${__dirname}/db.json`, "Hello World", err => {
      if (err) {
        throw Error(err);
      }
    });
  }

  deleteFromFile() {
    fs.deleteFromFile(`${__dirname}/db.json`, note.id, err => {
      if (err) {
        throw Error(err);
      }
    });
  }
}

module.exports = Store;
