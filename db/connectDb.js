import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not defined.");
    }

    const maskedURI = process.env.MONGO_URI.replace(/:([^:@]+)@/, ':****@');
    console.log(`🔌 Attempting to connect to MongoDB at: ${maskedURI}`);

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    throw error;
  }
}

export default connectDb;