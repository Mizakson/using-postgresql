const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsers(str) {
    const { rows } = await pool.query("SELECT username FROM usernames WHERE username LIKE $1", [`%${str}%`])
    return rows
}

async function deleteAllUsers() {
    await pool.query("DELETE FROM usernames")
}

module.exports = {
    getAllUsernames,
    insertUsername,
    searchUsers,
    deleteAllUsers,
};
