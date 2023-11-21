const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
app.listen(PORT);
app.use(express.static("public"))
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/home',(req,res)=>{
    res.render('home');
});


app.get('/project',(req,res)=>{
    res.render('project');
});

app.get('/bio',(req,res)=>{
    res.render('bio');
});
app.get('/task',(req,res)=>{
    res.redirect("https://sanju3888.github.io/hash_tasks/");
});