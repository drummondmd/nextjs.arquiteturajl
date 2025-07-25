// Require the cloudinary library
import { v2 as cloudinary } from 'cloudinary'

// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY_CLOUDNARY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure:true
});

export default cloudinary

