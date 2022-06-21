import express from "express";

let router = express.Router();

let initWeRoutes = (app) => {
    router.get("/", (req, res) =>{
        return res.send('Hello node js');
    });

    return app.use("/", router);
}

module.exports = initWeRoutes;