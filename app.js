const express = require("express")
const path = require("path")
const usersController = require("./controllers/usersController")
const app = express()
require("dotenv").config()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

// const indexRouter = require("./routes/index")

// app.use("/", indexRouter)

// paste to index router
app.get("/", (req, res) => {
    res.render("index",{
        title: "Home",
    })
})
app.get("/", usersController.getUsernames)
app.get("/new", usersController.createUsernameGet)
app.post("/new", usersController.createUsernamePost)


const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})