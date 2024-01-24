import React from "react";

export default function Card3() {
  return (
    <div className="max-w-sm rounded-lg bg-blue-dark p-4 h-50">
      <div className="flex justify-start">
        <img src="../assets/icons/info.png" alt="info" className="m-1" />
        <div className="text-md font-inter font-semibold mb-2">
          Your Tracking Link has been generated
        </div>
      </div>
      <p className="text-gray-700 text-md font-inter font-normal">
        Include the Link to Your Store's Navigation Menu. Very Good Experience.
      </p>
      <div className="mt-4 flex gap-2 justify-start">
        <button className="rounded-lg border border-slate-200 bg-white p-1 m-2">
          Copy Link
        </button>
        <button className="bg-button-color text-white font-inter text-xs py-2 px-2 font-medium rounded-lg">
          Go To Navigation Menu
        </button>
      </div>
    </div>
  );
}


