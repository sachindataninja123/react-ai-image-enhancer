import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../services/enhanceImageAPI";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    // console.log(file)
    // console.log(URL.createObjectURL(file))
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      const enhancedUrl = await enhancedImageAPI(file);
      setEnhancedImage(enhancedUrl);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false)
      alert("Error While enhancing the image. Please try again later.");
    }
  };

  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploadImage={uploadImage}
        enhancedImage={enhancedImage}
      />
    </>
  );
};

export default Home;
