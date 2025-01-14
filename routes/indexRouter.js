const { Router } = require("express")
const indexController = require("../controllers/indexController")

const indexRouter = Router()

indexRouter.get("/", indexController.indexHomePageGet)
indexRouter.get("/all", indexController.renderAllUsers)
indexRouter.get("/search", indexController.searchFormGet)
indexRouter.get("/search/result", indexController.searchUserGet)
indexRouter.get("/delete", indexController.deleteUsersGet)


module.exports = indexRouter