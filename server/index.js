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

/*
//cache control to disable cache.
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});
*/


//http-header with cache control:  res.set("Cache-Control", "no-store") eller res.append()

// All remaining requests return the React app, so it can handle routing.
app.get("/", function (req, res) {
  //response
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});


//Priority serve any static files. This has its own cache system. may enable when site becomes more dynamic.
app.use(express.static(path.resolve(__dirname, "../client/build")));


//listener on port
app.listen(port, () => console.log(`Listening on port ${port}`));


