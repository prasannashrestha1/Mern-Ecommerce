import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Profile = () => {
  return (
    <Layout title={"Profile"}>
      <div className="w-full m-3 p-3">
        <div className="flex flex-col md:flex-row">
          <div className="col-span-3">
            <UserMenu />
          </div>
          <div className="col-span-9">Your Profile</div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
