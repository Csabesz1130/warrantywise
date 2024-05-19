const mongoose = require('mongoose');
const ClaimSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  warrantyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warranty', required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Claim', ClaimSchema);
