const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "Please add name"],
    },
    email: {
        type: String,
        required: [true, "Please add email"],
    },
    gender: {
        type: String,
        required: [true, "Please add gender"],
        enum: ["Male", "Female"],
    },
    joinAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", UserSchema);
