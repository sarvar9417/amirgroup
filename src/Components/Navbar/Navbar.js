import React from "react";
import { user, ring } from "../../Icons/icons";

const Navbar = () => {
  const notifications = 1;

  return (
    <div className="w-full">
      <div className="flex  flex-row items-center justify-between">
        <div className="ml-16 text-base font-medium uppercase">Logo</div>
        <div className="flex flex-row items-center">
          <div className="mr-8">
            <div className="relative">
              {ring}
              <span className="absolute -top-2  -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-green text-[0.625rem] text-white ">
                {notifications}
              </span>
            </div>
          </div>
          <div className="flex h-[4.375rem] w-[18.25rem] items-center justify-center rounded-bl-[1.875rem] bg-blue-for-admin text-white ">
            <span className="mr-2">Личный кабинет</span>
            <span className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-white ">
              {user}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
