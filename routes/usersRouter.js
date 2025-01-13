const { Router } = require("express")
const usersController = require("../controllers/usersController")

const usersRouter = Router()

usersRouter.get("/", usersController.usersFormGet)
usersRouter.post("/", usersController.usersFormPost)

module.exports = usersRouter