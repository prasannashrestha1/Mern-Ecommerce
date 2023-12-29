import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="w-[100%]">
        <div className="flex flex-col sm:flex-row">
          <div className="col-span-3 md:col-span-6">
            <AdminMenu />
          </div>
          <div className="col-span-3 md:col-span-9">
            <div className="px-6 py-4 border-2 border-black w-full m-5">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <h2 className="text-gray-700 text-base">
                Admin Name: {auth?.user?.name}
              </h2>
              <h2 className="text-gray-700 text-base">
                Admin Email: {auth?.user?.email}
              </h2>
              <h2 className="text-gray-700 text-base">
                Admin Contact{auth?.user?.contact}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
