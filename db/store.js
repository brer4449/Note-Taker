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
    });
  }

  async writeFile(note) {
    fs.readFile(`${__dirname}/db.json`, "utf8", (error, data) => {
      if (error) {
        throw Error(error);
      }
      // console.log("testing db.json", JSON.parse(data));
      // console.log(JSON.parse(data));
      // console.log(note);
      let results = JSON.parse(data);
      results.push(note);
      // console.log(JSON.parse(data).push(note));
      fs.writeFile(
        path.join(__dirname, "/db.json"),
        JSON.stringify(results),
        err => {
          if (err) {
            throw Error(err);
          }
        }
      );
    });
  }

  appendFile() {
    fs.appendFile(
      path.join(__dirname, "/db.json"),
      JSON.stringify("Hello World"),
      err => {
        if (err) {
          throw Error(err);
        }
      }
    );
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
