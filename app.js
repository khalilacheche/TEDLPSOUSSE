var express = require("express"),
    path = require('path');
    app = express();
app.set('view engine', 'ejs');  
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",function (req,res) {
  res.render("Home");
})
app.get("/speakers",function (req,res) {
  res.send("Speakers")
})
app.get("/talks",function (req,res) {
  res.send("Talks")
})
app.get("/Team",function (req,res) {
  res.send("Team")
})
app.get("/Sponsors",function (req,res) {
  res.send("Sponsors");
})
app.get("/tedx2017/Program",function (req,res) {
  res.send("tedx2017_program")
})
app.get("/tedx2017/signup",function (req,res) {
  res.send("tedx2017_signUp")
})
app.get("/tedx2017/live",function (req,res) {
  res.send("tedx2017_live")
})
app.get("/*",function (req,res) {
  res.send("404");
})

app.listen(3000,function () {
  console.log("server started");
})
