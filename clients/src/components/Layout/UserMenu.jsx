import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="m-3 py-4 px-8 flex justify-center items-center flex-col gap-3">
        <h1 className="text-3xl text-center w-[40%]">User Panel</h1>
        <div className="w-96 ">
          {/* <NavLink
              to="#!"
              aria-current="true"
              className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600"
            >
              Create Category
            </NavLink> */}
          <NavLink
            to="/dashboard/users/profile"
            className="flex justify-center text-xl items-center w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200  border-slate-200  border-2 mb-1 "
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/users/orders"
            className="flex justify-center items-center text-xl w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200  border-slate-200  border-2"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
