const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    designation: { type: String, required: true },
    image: { type: String, required: true }, // Image path
}, { timestamps: true });

module.exports = mongoose.model("Clients", clientSchema);
