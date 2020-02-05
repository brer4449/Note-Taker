const store = require("../db/store.js");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(store);
  });
  app.post("/api/notes", function(req, res) {
    // if (tableData.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true);
    // } else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });
  app.delete("api/notes/:id", function() {
    // tableData = [];
    // waitListData = [];
    // console.log(tableData);
    // console.log(waitListData);
  });
};
