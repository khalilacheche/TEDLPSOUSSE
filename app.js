var express = require("express"),
    path = require('path');
    app = express();
app.set('view engine', 'ejs');  
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",function (req,res) {
  res.render("Home");
})


app.listen(3000,function () {
  console.log("server started");
})
