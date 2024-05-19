const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/warrantywise', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api/warranties', require('./routes/warranties'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/claims', require('./routes/claims'));
app.use('/api/auth', require('./routes/auth'));

app.listen(3000, () => console.log('Server running on port 3000'));
