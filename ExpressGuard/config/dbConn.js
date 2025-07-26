const mongoose= require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI,{
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
};

module.exports= connectDB;
