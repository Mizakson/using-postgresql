const express = require("express")
const path = require("path")
const app = express()
require("dotenv").config()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const indexRouter = require("./routes/indexRouter")
const usersRouter = require("./routes/usersRouter")

app.use("/", indexRouter)
app.use("/new", usersRouter)


const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})