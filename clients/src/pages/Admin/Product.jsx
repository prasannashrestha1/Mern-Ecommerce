import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="w-[100%]">
        <div className="flex flex-col sm:flex-row">
          <div className="col-span-3">
            <AdminMenu />
          </div>
          <div className="col-span-9">
            <h1 className="text-center text-2xl">All Product List</h1>
            {products.map((p) => (
              <Link to={`/dashboard/admin/product/${p.slug}`} key={p._id}>
                <div
                  className="max-w-sm rounded overflow-hidden shadow-lg mb-5 "
                  style={{ width: "18rem" }}
                >
                  <img
                    className="w-full"
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                    alt={p.names}
                  />
                  <div className="px-6 py-4">
                    <h1 className="font-bold text-xl mb-2">{p.names}</h1>
                    <p className="text-gray-700 text-base">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
