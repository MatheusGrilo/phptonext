import mongoose from "mongoose";

const CurrencySchema = new mongoose.Schema({
  from: { type: String, default: "default" },
  createdAt: { type: Date, default: Date },
  lastUpdated: Date,
  body: Object,
});

module.exports =
  mongoose.models.Currency || mongoose.model("Currency", CurrencySchema);
