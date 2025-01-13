const express = require("express")
const path = require("path")
const app = express()
require("dotenv").config()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const indexRouter = require("./routes/index")

app.use("/", indexRouter)

// paste to index router
app.get("/", (req, res) => {
    console.log("usernames will be logged here...")
})

app.get("/new", (req, res) => {
    // render form here
})

app.post("/new", (req, res) => {
    console.log("username to be saved: ", req.body.username)
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})