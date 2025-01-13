function indexHomePageGet(req, res) {
    res.render("index",{
        title: "Home",
    })
    console.log("usernames will be logged here - WIP")
}

module.exports = {
    indexHomePageGet,
}