import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error("❌ Error: MONGO_URI environment variable is not defined.");
      process.exit(1);
    }

    const maskedURI = process.env.MONGO_URI.replace(/:([^:@]+)@/, ':****@');
    console.log(`🔌 Attempting to connect to MongoDB at: ${maskedURI}`);

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
}

export default connectDb;