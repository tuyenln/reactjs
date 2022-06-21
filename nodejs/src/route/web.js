import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWeRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);

    //rest api
    router.get("/test", (req, res) =>{
        return res.send('test');
    });

    return app.use("/", router);
}

module.exports = initWeRoutes;