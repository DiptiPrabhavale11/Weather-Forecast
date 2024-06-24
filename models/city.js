const mongoose = require("mongoose").set("strictQuery", true);

const citySchema = new mongoose.Schema({
    city_name: {
        type: String,
        unique: true,
        required: true
    },
    state_code: {
        type: String,
        required: true
    },
    country_code: {
        type: String,
        required: true
    },
    country_full: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
});

citySchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.city_id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("City", citySchema);