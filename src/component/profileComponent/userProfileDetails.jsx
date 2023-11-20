import React from "react";
import { FaVolumeUp, FaEdit } from "react-icons/fa";

function UserProfileDetailsSection() {
  return (
    <div className="flex flex-col gap-5 p-8 w-full">
      {/* Container for each IP address input with flex column layout, vertical gap, and full width */}
      <div className="flex flex-col gap-2 w-full">
        {/* Label for IP address (Camera 1) */}
        <label className="font-poppins text-base font-normal text-gray-700">
          Full Name
        </label>

        <div className="relative flex items-center w-full">
          {/* Input for IP address (Camera 2) with specified styling */}
          <input
            className="flex w-full h-12 bg-transparent border-2 focus:outline-none border-green-500 p-5 rounded-md font-poppins text-base font-semibold leading-8 text-left text-gray-500"
            type="text"
            placeholder="HF"
          />
          <FaEdit className="absolute right-4 w-6 h-6 text-green-500  cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        {/* Label for IP address (Camera 1) */}
        <label className="font-poppins text-base font-normal text-gray-700">
          Email
        </label>

        <div className="relative flex items-center w-full">
          {/* Input for IP address (Camera 2) with specified styling */}
          <input
            className="flex w-full h-12 bg-transparent border-2 focus:outline-none border-green-500 p-5 rounded-md font-poppins text-base font-semibold leading-8 text-left text-gray-500"
            type="email"
            placeholder="example@example.com"
          />
          <FaEdit className="absolute right-4 w-6 h-6 text-green-500  cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {/* Label for IP address (Camera 1) */}
        <label className="font-poppins text-base font-normal text-gray-700">
          Mobile Number
        </label>

        <div className="relative flex items-center w-full">
          {/* Input for IP address (Camera 2) with specified styling */}
          <input
            className="flex w-full h-12 bg-transparent border-2 focus:outline-none border-green-500 p-5 rounded-md font-poppins text-base font-semibold leading-8 text-left text-gray-500"
            type="number"
            placeholder="+9991626838292"
          />
          <FaEdit className="absolute right-4 w-6 h-6 text-green-500  cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {/* Label for IP address (Camera 1) */}
        <label className="font-poppins text-base font-normal text-gray-700">
          Password
        </label>

        <div className="relative flex items-center w-full">
          {/* Input for IP address (Camera 2) with specified styling */}
          <input
            className="flex w-full h-12 bg-transparent border-2 focus:outline-none border-green-500 p-5 rounded-md font-poppins text-base font-semibold leading-8 text-left text-gray-500"
            type="password"
            placeholder="********************"
          />
          <FaEdit className="absolute right-4 w-6 h-6 text-green-500  cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default UserProfileDetailsSection;
