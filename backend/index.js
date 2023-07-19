const express = require('express')
const cors = require("cors")
const { connection } = require('./db')
const { dealerRouter } = require('./routes/dealer.route')
const { auth } = require('./middleware/auth.middleware')
const { marketRouter } = require('./routes/marketplace.route')
const { oemRouter } = require('./routes/oem.route')
const { MarketModel } = require('./models/marketplace.model')
require("dotenv").config()

const app = express()

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Basic API Endpoint")
})

app.get("/data", async (req, res) => {
    try {
        const market = await MarketModel.find()
        res.status(200).send(market)

    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})

app.use("/dealers", dealerRouter)


app.use(auth)

app.use("/market", marketRouter)

app.use("/oem", oemRouter)


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