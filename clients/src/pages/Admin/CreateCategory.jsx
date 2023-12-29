import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const CreateCategory = () => {
  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="w-[100%]">
        <div className="flex flex-col sm:flex-row">
          <div className="col-span-3">
            <AdminMenu />
          </div>
          <div className="col-span-9">Create Category</div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
