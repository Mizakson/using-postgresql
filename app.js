const express = require("express")
const path = require("path")
const { title } = require("process")
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
    console.log("usernames will be logged here - WIP")
})

app.get("/new", (req, res) => {
    res.render("form", {
        title: "User Form",
    })
})

app.post("/new", (req, res) => {
    console.log("username to be saved: ", req.body.username)
    res.redirect("/")
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})