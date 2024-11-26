exports.logNamesDB = (req, res) => {
    console.log("usernames will be logged here")
}

// exports.renderHomePage = (req, res) => {
//     res.render("index", {
//         title: "Username DB -- Using PostgreSQL"
//     })
// }

exports.getUsernameForm = (req, res) => {
    res.render("form", {
        title: "New Username"
    })
}

exports.postUsernameForm = (req, res) => {
    console.log("username to be saved: ", req.body.username)
}