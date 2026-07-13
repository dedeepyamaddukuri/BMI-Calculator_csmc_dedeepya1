const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bmiRoutes = require('./routes/bmiRoutes');

const app = express();

const PORT = 5000;
const MONGO_URI = 'mongodb://127.0.0.1:27017/bmi_tracker';

app.use(cors());
app.use(express.json());

app.use('/api/bmi', bmiRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });