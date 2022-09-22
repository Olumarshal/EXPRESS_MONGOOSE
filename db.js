const mongoose = require("mongoose")
require("dotenv").config()

const MONGO_DB_CONNECTION_URL = MONGO_DB_CONNECTION_URL

function connectToMongoDB() {
    mongoose.connect(MONGO_DB_CONNECTION_URL)

    mongoose.connection.on("connection", () => {
        console.log("Successfully connected to Databae")
    })

    mongoose.connection.on("error", (err) => {
        console.log(err)
        console.log("An error occured")
    })
}

module.exports = connectToMongoDB