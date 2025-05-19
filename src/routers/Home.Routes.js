import { Router } from "express";
import HomeController from "../controllers/Home.Controller.js";

const routerHome = new Router();

routerHome.get("/", HomeController.index);

export default routerHome;
