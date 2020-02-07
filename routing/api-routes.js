const Store = require("../db/store.js");
const path = require("path");
let store = new Store();

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(store.readFile());
    //(MimeType = "application/json")
  });

  app.post("/api/notes", function(req, res) {
    store.writeFile(req.body);
    // console.log(__dirname);
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  //   app.delete("api/notes/:id", function() {
  //     res.delete(store.deleteFromFile());
  //     console.log("successfully deleted!");
  //   });
};
