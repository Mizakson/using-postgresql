const db = require("../db/query")

exports.logNamesDB = async (req, res) => {
    // console.log("usernames will be logged here")
    const usernames = await db.getAllUsernames()
    console.log("Usernames: ", usernames)
    res.send("Usernames: " + usernames.map(user => user.username).join(", "))
}

// exports.renderHomePage = (req, res) => {
//     res.render("index", {
//         title: "Username DB -- Using PostgreSQL"
//     })
// }

exports.getUsernameForm = async (req, res) => {
    res.render("form", {
        title: "New Username"
    })
}

exports.postUsernameForm = async (req, res) => {
    const { username } = req.body
    await db.insertUsername(username)
    res.redirect("/")
    // console.log("username to be saved: ", req.body.username)
}