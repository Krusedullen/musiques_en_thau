const express = require("express");
const path = require("path");
const nocache = require("nocache");
//const {StaticRouter,} = require('react-router-dom/server');
const port = process.env.PORT || 5000;

/*
var options = {
  etag: false,
  maxAge: 600,
};
*/

const app = express();

//ENABLE CACHE-CONTROL HEADER TO BE EXPOSED FOR TROUBLE SHOOTING IN DEV TOOLS
//should be disabled later
app.all("*", function (req, res, next) {
  //res.header("Access-Control-Expose-Headers", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header(
    "Content-Security-Policy",
    "default-src 'self' https://musiquesenthau.com *.googleapis.com; img-src *;"
  );
  next();
});

app.use(nocache());
app.set("etag", false);

// All requests return the React app, these paths also exist in the client index.js.
// :any is a parameter that can take any value you request in the URL. 
// The site returns an error page if the page is not found.
app.get("/:any", function (req, res) {
  //response
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

//Priority serve any static files. This has its own cache system.
app.use(
  express.static(path.resolve(__dirname, "../client/build"), {
    maxage: "5000", // uses milliseconds per docs
  })
);

//listener on port
app.listen(port, () => console.log(`Listening on port ${port}`));


