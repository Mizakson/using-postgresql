const { Pool } = require("pg")
const path = require("path")
require("dotenv").config()

module.exports = new Pool({
    host: process.env.HOST,
    user: process.env.USERNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
})