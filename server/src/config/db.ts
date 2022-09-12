import { connect } from 'mongoose';

// Variables
const mongoURI: string | undefined = process.env.MONGO_URI;

// Connect to database
export const connectDB = async () => {
  try {
    if (mongoURI) {
      await connect(mongoURI);
      console.log(`MongoDB connection established`);
    } else {
      throw new Error('MongoDB URI is not defined');
    }
  } catch (err) {
    console.log(`Error while connecting to the database: ${err}`);
    process.exit(1);
  }
};
