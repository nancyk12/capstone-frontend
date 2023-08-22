import { CloudinaryContext } from 'cloudinary-react';

const cloudinaryConfig = {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    appKey: process.env.REACT_APP_CLOUDINARY_API_SECRET,
    apiSecret: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
};

export default cloudinaryConfig;