const { Router } = require("express")
const indexRouter = Router()
const indexController = require("../controllers/indexController")

// indexRouter.get("/", indexController.renderHomePage)
indexRouter.get("/", indexController.logNamesDB)
indexRouter.get("/new", indexController.getUsernameForm)
indexRouter.post("/new", indexController.postUsernameForm)

module.exports = indexRouter