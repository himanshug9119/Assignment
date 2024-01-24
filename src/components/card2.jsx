import React from "react";

export default function Card2() {
  return (
    <div className="max-w-sm rounded-lg bg-yellow-light p-4 h-50">
      <div className="flex justify-start">
        <img src="../assets/icons/alert.png" alt="alert" className="m-1" />
        <div className="text-md font-inter font-semibold mb-2">
          Customize Customer Notification
        </div>
      </div>
      <p className="text-gray-700 text-md font-inter font-normal">
        Tailor Your Email Experience: Set the Sender Email and Choose
        Notification Triggers
      </p>
      <div className="mt-4">
        <button className="bg-button-color text-white font-inter text-xs font-medium py-2 px-2 rounded-lg">
          Configure Notifications
        </button>
      </div>
    </div>
  );
}
