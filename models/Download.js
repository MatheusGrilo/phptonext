import mongoose from "mongoose";

const DownloadSchema = new mongoose.Schema({
  title: String,
  info: String,
  needUser: Boolean,
  uploader: String,
  createdAt: { type: Date, default: Date },
  lastUpdated: Date,
  body: Object,
});

module.exports =
  mongoose.models.Download || mongoose.model("Download", DownloadSchema);
