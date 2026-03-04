import React from "react";

const ImageUpload = ({ uploadImageHandler }) => {

  const showImageHandler =  (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImageHandler(file);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="cursor-pointer block w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={showImageHandler}
        />
        <span className="text-lg text-gray-600">
          Click and drag to upload your image
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
