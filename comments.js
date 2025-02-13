// Create web server
// Create a server that listens on port 3000
// Create a route that listens for GET requests on /comments
// When a GET request is made to /comments, read the comments.json file and send the contents back to the client
// Start the server and test that you can retrieve the comments from the server

const express = require("express");
const fs = require("fs");

const app = express();

app.get("/comments", (req, res) => {
  fs.readFile("comments.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});