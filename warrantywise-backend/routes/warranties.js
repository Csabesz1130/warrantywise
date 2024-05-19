const express = require('express');
const Warranty = require('../models/Warranty');
const router = express.Router();
router.get('/', async (req, res) => {
  const warranties = await Warranty.find();
  res.json(warranties);
});
router.post('/', async (req, res) => {
  const warranty = new Warranty(req.body);
  await warranty.save();
  res.json(warranty);
});
module.exports = router;
