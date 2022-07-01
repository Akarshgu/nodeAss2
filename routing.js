const express = require ("express");

const routing=express();

routing.get("/",function(req,res){
   res.write("This is Home page");
   res.write("To visit another page pls insert /api.main in url")
   res.end()
   
    
})

routing.get("/api/main",function(req,res){
    res.send("<h1>Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.</h1>")
    
 })



 routing.listen(4001);
 