import express from "express";

let configViewEngine = (app) => {
    //arrow function
    //set path static 
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");// same jsp, blade laravel
    app.set("views", "./src/views"); //set path view 
}

module.exports = configViewEngine;