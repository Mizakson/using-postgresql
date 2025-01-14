const { render } = require("ejs");
const db = require("../db/queries")

async function indexHomePageGet(req, res) {
    res.render("index", {
        title: "Home",
    })
}

async function renderAllUsers(req, res) {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

module.exports = {
    indexHomePageGet,
    renderAllUsers,
}