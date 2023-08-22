import React from 'react';
import UploadWidget from './UploadWidget';
import cloudinaryConfig from './cloudinaryConfig';

const ImageUpload = ({ onImageUpload }) => {
  const handleUploadSuccess = (result) => {
    // Extract the image URL from the result and pass it to the parent component
    onImageUpload(result.info.secure_url);
  };

  const handleUploadFailure = (error) => {
    console.error('Error uploading image:', error);
  };

  return (
    <UploadWidget
      sources={['local', 'url']}
      resourceType="image"
      cloudName={cloudinaryConfig.cloudName}
      uploadPreset="your-upload-preset" // Replace with your upload preset
      cropping
      croppingAspectRatio={1}
      croppingShowBackButton
      croppingModalTitle="Crop your image"
      onSuccess={handleUploadSuccess}
      onFailure={handleUploadFailure}
    />
  );
};

export default ImageUpload;