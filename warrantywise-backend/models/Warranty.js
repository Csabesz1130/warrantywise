const mongoose = require('mongoose');
const WarrantySchema = new mongoose.Schema({
  productName: String,
  purchaseDate: Date,
  warrantyPeriod: Number,
  coverageDetails: String,
  userId: mongoose.Schema.Types.ObjectId,
});
module.exports = mongoose.model('Warranty', WarrantySchema);
