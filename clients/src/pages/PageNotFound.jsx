import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Page Not Found"}>
      <div className="pnf flex min-h-[65vh] flex-col items-center justify-center">
        <h1 className="text-8xl font-bold">404</h1>
        <h2 className="text-3xl p-3">Oops ! Page Not Found</h2>
        <Link
          to="/"
          className="text-black text-lg font-normal pnf-btn mt-3 py-3 px-5 rounded-lg"
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
