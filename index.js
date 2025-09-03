const express = require('express');
const app = express();

app.set("view engine",'ejs');


//app.get("/:nome/:lang",(req, res) => {
  app.get("/",(req, res) => {
    //res.send("Bem vindo ao GuiaPerguntas!");
    
    res.render("principal/perfil");

  //var nome = req.params.nome;
  //var lang = req.params.lang;
 
  // res.send('Bem-vindo ao GuiaPerguntas!');
  //res.render("index",{
   //nome: nome, 
   // lang: lang, 
   // empresa: "Guia do programador", 
   // inscritos: 8000 });
  }); 
app.listen(8080,()=>{console.log("Servidor rodando na porta");}); 