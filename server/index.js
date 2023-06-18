const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;

/*
var options = {
  etag: false,
  maxAge: 600,
};
*/

const app = express();

//cache control to disable cache.
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

/*
Priority serve any static files. This has its own cache system. may enable when site becomes more dynamic.
app.use(express.static(path.resolve(__dirname, "../client/build")));
*/

//http-header with cache control:  res.set("Cache-Control", "no-store") eller res.append()

// All remaining requests return the React app, so it can handle routing.
app.get("/", function (req, res) {
  //response
  res.set("Cache-Control", "no-store");
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
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
