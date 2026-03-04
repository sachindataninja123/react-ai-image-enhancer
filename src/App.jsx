import React from "react";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex items-center min-h-screen flex-col justify-center bg-gray-300 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">AI Image Enhancer</h1>
        <p className="text-lg text-gray-500">Upload your Image and let AI enhance to in seconds!</p>
      </div>
      <Home />
      <div className="text-sm text-gray-900 mt-6">Powered By @VitaAI</div>
    </div>
  );
};

export default App;
