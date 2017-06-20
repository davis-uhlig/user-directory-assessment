const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const userData = require("./data.js");


app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static('public'))
console.log(__dirname);

app.get("/", function(req, res){
  res.render("index", userData)


});

app.listen(3000, function(){
  console.log("App is running on localhost:3000");
});
