import { Router} from "express"
import HomeController from "../controllers/Home.controller.js"

 const routerHome = new Router()

 routerHome.get("/", HomeController.index)

 export default routerHome