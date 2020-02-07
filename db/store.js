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

  writeFile(note) {
    //have to use read file to get data from db.json
    fs.readFile(`${__dirname}/db.json`, "utf8", (error, data) => {
      if (error) {
        throw Error(error);
      }
      // console.log("testing db.json", JSON.parse(data));
      // console.log(JSON.parse(data));
      // console.log(note);
      //need to parse that data so it's a JS object(array), something we can work with in JS
      let results = JSON.parse(data);
      //adding the new note param that's from the writeFile method in api-routes
      results.push(note);
      // console.log(JSON.parse(data).push(note));
      fs.writeFile(
        path.join(__dirname, "/db.json"),
        //need to stringify the results so it's not a JSON object anymore
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
