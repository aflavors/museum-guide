const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const objectSchema = new Schema({
  title: { type: String, required: true },
  artistDisplayName: { type: String, required: true },
  objectDate: { type: String, required: true },
  objectURL: { type: String, required: true },
  primaryImageSmall: { type: String, required: true },
  objectID: { type: Number, required: true },
  GalleryNumber: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Object = mongoose.model("Object", objectSchema);

module.exports = Object;
