const mongoose = require("mongoose");

const organSchema = new mongoose.Schema({
  name: {},
  region: {},
});

module.exports = mongoose.model("Organ", organSchema);