import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="m-3 py-4 px-8 flex justify-start items-start flex-col gap-3">
        <h1 className="text-3xl text-center w-[20%]">Admin Panel</h1>
        <div className="w-96 ">
          {/* <NavLink
          to="#!"
          aria-current="true"
          className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600"
        >
          Create Category
        </NavLink> */}
          <NavLink
            to="/dashboard/admin/create-category"
            className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200  border-slate-200  border-2 "
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200  border-slate-200  border-2"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/product"
            className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200  border-slate-200  border-2"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200  border-slate-200  border-2"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
