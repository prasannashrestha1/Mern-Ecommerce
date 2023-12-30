import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className="w-full m-3 p-3">
        <div className="flex flex-col md:flex-row">
          <div className="col-span-3">
            <UserMenu />
          </div>
          <div className="col-span-9 w-[50%] border-black border-2 ">
            All Orders
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
