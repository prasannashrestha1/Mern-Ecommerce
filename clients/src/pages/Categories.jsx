import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import useCategory from "../hooks/UseCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="w-full">
        <div className="row">
          {categories.map((c) => (
            <div className="col-span-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <button className="bg-blue-500 rounded-lg p-3 border-blue-700 border-2">
                <Link to={`/category/${c.slug}`}>{c.name}</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
