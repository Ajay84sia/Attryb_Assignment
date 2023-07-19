const express = require('express');
const { MarketModel } = require('../models/marketplace.model')
const marketRouter = express.Router();

marketRouter.get("/", async (req, res) => {
    try {
        const { price, sort, order, search, color, mileage } = req.query;

        const filterObj = {};

        if (search) {
            filterObj.title = { $regex: search, $options: 'i' };
        }

        if (color) {
            filterObj.color = color;
        }

        if (price) {
            filterObj.price = { $lte: parseInt(price) };
        }

        if (mileage) {
            filterObj.mileage = { $lte: parseInt(mileage) };
        }


        let sortObj = {};
        if (sort === 'price') {
            sortObj.price = order === 'desc' ? -1 : 1;
        } else if (sort === 'mileage') {
            sortObj.mileage = order === 'desc' ? -1 : 1;
        }

        const market = await MarketModel.find(filterObj).sort(sortObj)
        res.status(200).send(market)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }

})



marketRouter.post("/add", async (req, res) => {
    try {
        const market = new MarketModel(req.body)
        await market.save()
        res.status(200).send({ 'msg': 'New Data has been added' })
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})


marketRouter.patch("/update/:dataID", async (req, res) => {
    const { dataID } = req.params;
    const data = await MarketModel.findOne({ _id: dataID })
    try {
        if (req.body.dealerID !== data.dealerID) {
            res.status(200).send({ "msg": "You are not authorized to perform this action" })
        } else {
            await MarketModel.findByIdAndUpdate({ _id: dataID }, req.body)
            res.status(200).send(`The data with id:${dataID} has been updated`)
        }
    } catch (err) {
        res.status(400).send(err)
    }

})


marketRouter.delete("/delete/:dataID", async (req, res) => {
    const { dataID } = req.params;
    const data = await MarketModel.findOne({ _id: dataID })
    try {
        if (req.body.dealerID !== data.dealerID) {
            res.status(200).send({ "msg": "You are not authorized to perform this action" })
        } else {
            await MarketModel.findByIdAndDelete({ _id: dataID })
            res.status(200).send(`The data with id:${dataID} has been deleted`)
        }
    } catch (err) {
        res.status(400).send(err)
    }

})


module.exports = {
    marketRouter
}