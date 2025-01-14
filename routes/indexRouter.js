const { Router } = require("express")
const indexController = require("../controllers/indexController")

const indexRouter = Router()

indexRouter.get("/", indexController.indexHomePageGet)
indexRouter.get("/all", indexController.renderAllUsers)


module.exports = indexRouter