const express = require('express');
const Claim = require('../models/Claim');
const router = express.Router();
router.post('/', async (req, res) => {
  const claim = new Claim(req.body);
  await claim.save();
  res.status(201).json(claim);
});
router.get('/user/:userId', async (req, res) => {
  const claims = await Claim.find({ userId: req.params.userId });
  res.json(claims);
});
router.put('/:id', async (req, res) => {
  const claim = await Claim.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(claim);
});
module.exports = router;
