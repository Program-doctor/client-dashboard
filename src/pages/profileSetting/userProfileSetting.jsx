import React from "react";
import UserProfileDetailsSection from "../../component/profileComponent/userProfileDetails";

function UserProfileSetting() {
  return (
    <div className="flex flex-col items-start gap-5 w-full p-5">
      <h1 className="text-3xl font-bold dark:text-white text-gray-800">
        Profile
      </h1>
      <div className="flex flex-row align-center justify-between gap-5 w-full shadow-md p-5">
        <div className="flex flex-row align-center justify-center gap-5">
          <div className="w-32 h-32 rounded-full border-4 border-green-500 flex items-center justify-center">
            <h6>HF</h6>
          </div>
          <div className="flex flex-col align-center justify-center">
            <h4 className="font-poppins text-lg font-semibold text-gray-800">
              HF
            </h4>
            <h6 className="font-poppins text-sm font-normal text-gray-400">
              email
            </h6>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <h3 className="flex flex-row items-center justify-center text-xl font-semibold border border-gray-800 rounded-custom h-10 w-120 p-5 cursor-pointer font-poppins text-base font-semibold text-left">
            Update photo
          </h3>
        </div>
      </div>
      <UserProfileDetailsSection />
    </div>
  );
}

export default UserProfileSetting;
