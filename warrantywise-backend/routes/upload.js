const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });
router.post('/', upload.single('file'), (req, res) => {
  res.json({ filePath: req.file.path });
});
module.exports = router;
