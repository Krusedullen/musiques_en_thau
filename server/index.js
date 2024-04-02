const express = require("express");
const path = require("path");
const nocache = require("nocache");
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
  res.header("Access-Control-Expose-Headers", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header(
    "Content-Security-Policy",
    "default-src 'self' https://musiquesenthau.com *.googleapis.com; img-src *;"
  );
  next();
});

app.use(nocache());
app.set("etag", false);

//Priority serve any static files. This has its own cache system.
app.use(express.static(path.join(__dirname, '../client/build', {
  maxage: "5000", // uses milliseconds per docs
})));
// All remaining requests return the React app, so it can handle routing.
-app.get('/', function (req, res) {
+app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
 });
});





/* old syntax
// All remaining requests return the React app, so it can handle routing.
app.get("/", function (req, res) {
  //response
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});


//Priority serve any static files. This has its own cache system.
app.use(
  express.static(path.resolve(__dirname, "../client/build"), {
    maxage: "5000", // uses milliseconds per docs
  })
);
*/
//listener on port
app.listen(port, () => console.log(`Listening on port ${port}`));

//http-header with cache control:  res.set("Cache-Control", "no-store") eller res.append()
/*
//cache control to disable cache.
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});
*/
