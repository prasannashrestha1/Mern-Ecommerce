import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboards = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="w-full m-3 p-3">
        <div className="flex flex-col md:flex-row">
          <div className="col-span-3">
            <UserMenu />
          </div>
          <div className="col-span-9">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 w-75 p-3">
                <h3 className="text-3xl">{auth?.user?.name}</h3>
                <h3 className="text-3xl">{auth?.user?.email}</h3>
                <h3 className="text-3xl">{auth?.user?.address}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboards;
