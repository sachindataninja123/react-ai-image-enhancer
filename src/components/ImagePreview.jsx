import React from "react";
import Loading from "./Loading";

const ImagePreview = ({ uploadImage, enhancedImage, loading }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>

        {uploadImage ? (
          <div className="w-full h-100">
            <img src={uploadImage} alt="" className="w-full object-cover " />
          </div>
        ) : (
          <div className="flex items-center justify-center bg-gray-200 h-100">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced image */}

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>

        {loading ? (
          <Loading />
        ) : enhancedImage ? (
          <div className="w-full h-100">
            <img
              src={enhancedImage}
              alt="Enhanced"
              className="w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center bg-gray-200 h-100">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
