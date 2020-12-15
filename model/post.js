const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, "Please add name"],
    },
    Body: {
        type: String,
        required: [true, "Please add email"],
    },
    joinAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        required: true,
    },
});

module.exports = mongoose.model("Post", PostSchema);
