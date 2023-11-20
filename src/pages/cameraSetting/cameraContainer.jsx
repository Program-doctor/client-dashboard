import React from "react";
import SettingSideBar from "../../component/settingSideBar/settingSideBar";
import { Outlet } from "react-router-dom";

function CameraContainer() {
  return (
    <div className="flex flex-row w-full ">
      <div className=" flex flex-col flex-.5">
        <SettingSideBar />
      </div>
      <div className="flex-1 border-l flex flex-col border-gray-300">
        <Outlet />
      </div>
    </div>
  );
}

export default CameraContainer;
