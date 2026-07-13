const mongoose = require('mongoose');
const dns = require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])

const connectDB = () => {
  try {
    
    await mongoose.connect("mongodb+srv://dedeepyamaddukuri24_db_<user:deepumongodb>@cluster0.zaqdku6.mongodb.net/dedeepya?appname=cluster0");
  
  mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch((err) => console.error('MongoDB connection error:', err));
};

module.exports = connectDB;
