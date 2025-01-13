function usersFormGet(req, res) {
    res.render("form", {
        title: "User Form",
    })
}

function usersFormPost(req, res) {
    console.log("username to be saved: ", req.body.username)
    res.redirect("/")
}

module.exports = {
    usersFormGet,
    usersFormPost,
}