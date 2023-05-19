import * as dotenv from 'dotenv';
dotenv.config();

const env = {
  MONGO_URL: process.env.MONGO_URL,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};

export default env;
