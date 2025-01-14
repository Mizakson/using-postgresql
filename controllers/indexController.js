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

async function searchFormGet(req, res) {
    res.render("search", {
        title: "Search Form",
    })
}

async function searchUserGet(req, res) {
    const searchTerm = req.query.search
    const usernames = await db.searchUsers(searchTerm)
    console.log(searchTerm, usernames)
    if (usernames.length >= 1) {
        res.send("Results: " + usernames.map(user => user.username).join(", "));
    } else {
        res.send("User not found :(")
    }
    
}

module.exports = {
    indexHomePageGet,
    renderAllUsers,
    searchFormGet,
    searchUserGet,
}