const mongoose = require('mongoose');

// Define the Oem schema
const oemSchema = mongoose.Schema({
    title: { type: String, required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    imageURL: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    mileage: { type: Number, required: true },
    color: { type: String, required: true },
    accidents: { type: Number, required: true },
    prevBuyers: { type: Number, required: true },
    registrationPlace: { type: String, required: true },
    description : { type: String, required: true},
    dealerID: { type: String, required: true}
}, {
    versionKey: false
});

// Create the Oem model
const OemModel = mongoose.model('oem', oemSchema);

// Export the Oem model
module.exports = { 
    OemModel 
};