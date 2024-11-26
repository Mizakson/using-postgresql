const { Router } = require("express")
const indexRouter = Router()
const indexController = require("../controllers/indexController")

// indexRouter.get("/", indexController.renderHomePage)
indexRouter.get("/", indexController.logNamesDB)
indexRouter.get("/new", indexController.getUsernameForm)

module.exports = indexRouter