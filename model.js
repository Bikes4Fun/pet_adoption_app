const mongoose = require("mongoose");
mongoose.connect(process.env.DB_LINK);

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must have a name"]
    },
    species: {
        type: String,
        required: [true, "Must have species"]
    },
    breed: {
        type: String,
        required: [true, "Must have breed"]
    },
    age: {
        type: Number,
        required: [true, "Must have age"]
    },
    gender: {
        type: String,
        required: [true, "Must have gender"]
    }
});

const adoptionApp = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must have a name"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "Must have a phone number"]
    },
    email: {
        type: String,
        required: [true, "Must have a email"]
    },
    petId: {
        type: Number,
        required: [true, "Must have a pet Id"]
    }
});