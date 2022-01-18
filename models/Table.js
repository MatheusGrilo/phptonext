import mongoose from "mongoose";

const TableSchema = new mongoose.Schema({
  from: String,
  createdAt: { type: Date, default: Date },
  lastUpdated: Date,
  body: Object,
});

module.exports = mongoose.models.Table || mongoose.model("Table", TableSchema);
