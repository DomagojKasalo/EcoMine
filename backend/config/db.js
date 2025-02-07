const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/blockchainApp";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    });
    console.log("Uspješno povezivanje s MongoDB bazom podataka.");
  } catch (error) {
    console.error("Greška pri povezivanju s MongoDB:", error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
