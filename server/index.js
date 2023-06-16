const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;

const app = express();
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../client/build")));

// All remaining requests return the React app, so it can handle routing.
app.get("/", function (req, res) {
  //response
  res.cache
    .clear()
    .sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));







/*
const clearCacheData = () => {
  //clearing cache data to display latest version of static files
  caches.keys().then((names) => {
    names.forEach((name) => {
      caches.delete(name);
    });
  });
  console.log("Complete Cache Cleared");
};
*/