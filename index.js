const fs = require("fs");
const express = require("express");
const http = require("http");
const app = express();
const PORT = 5500;


app.use(express.json());

app.get('/',(req,res)=>
    {res.send('backend is running');});

app.listen(5500, () => {
  console.log('Server started on port 8000');
});