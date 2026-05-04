const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

let post = [];

app.get('/',(req,res)=>
    {res.render("index");});

app.get('/new',(req,res)=>{
  res.render("new");
});


app.get('/allblogs',(req,res)=>{
  res.render("allblogs",{post : post});
});

app.post("/delete/:id",(req, res) => {
    let id = req.params.id; // Changed from index to id for clarity
    post.splice(id, 1);
    res.redirect("/allblogs");
});

app.post("/submit", (req, res) => {

  let newpost = {
     title: req.body.title,
    content: req.body.content ? req.body.content : "No content"
  };

  post.push(newpost);

  res.redirect("/allblogs");
});

app.listen(PORT, () => {
  console.log('Server started on port'+ PORT);
});