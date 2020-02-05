const Store = require("../db/store.js");
let store = new Store();
module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(store.readFile());
  });
  app.post("/api/notes", function(req, res) {
    console.log("hello");
  });
  app.delete("api/notes/:id", function() {
    // tableData = [];
    // waitListData = [];
    // console.log(tableData);
    // console.log(waitListData);
  });
};
