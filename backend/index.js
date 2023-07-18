const express = require('express')
const cors = require("cors")
const { connection } = require('./db')
require("dotenv").config()

const app = express()

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Basic API Endpoint")
})




app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Successfully Connected to the database server")
    } catch (error) {
        console.log(error)
        console.log("Cannot connect to the database server")
    }
    console.log(`Server is running at port ${process.env.port}`)
})