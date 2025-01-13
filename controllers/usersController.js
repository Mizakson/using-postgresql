const db = require("../db/queries")

async function usersFormGet(req, res) {
    res.render("form", {
        title: "User Form",
    })
}

async function usersFormPost(req, res) {
    const { username } = req.body
    await db.insertUsername(username)
    res.redirect("/")
    return
}

module.exports = {
    usersFormGet,
    usersFormPost,
}