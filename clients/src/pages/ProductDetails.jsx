import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [products, setProducts] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initial p details

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //get proudcts
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product/${params.slug}`
      );
      setProducts(data?.products);
      getSimilarProducts(data?.products._id, data?.products.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar products
  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="w-full mt-2 flex flex-col md:flex-row ">
        <div className="col-span-6 w-full">
          <img
            className=""
            src={`http://localhost:8080/api/v1/product/product-photo/${products._id}`}
            alt={products.names}
          />
        </div>
        <div className="col-span-6  w-full bg-red-200 ml-4">
          <h1 className="text-3xl  text-center">Product Details</h1>
          <h4 className="text-xl mr-3 mt-3">Name: {products.names}</h4>
          <h4 className="text-xl ">Description: {products.description}</h4>
          <h4 className="text-xl ">Price: {products.price}</h4>
          <h4 className="text-xl ">Category: {products?.category?.name}</h4>
          <button className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
        <hr />
      </div>
      <div className="w-full">
        Similar Products
        {relatedProducts.length < 1 && <p>No Similar Products Found</p>}
        <div className="flex justify-center items-center gap-7">
          {relatedProducts.map((p) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg mb-5 "
              style={{ width: "18rem" }}
              key={p._id}
            >
              <img
                className="w-full"
                src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                alt={p.name}
              />
              <div className="px-6 py-4">
                <h1 className="font-bold text-xl mb-2">{p.names}</h1>
                <p className="text-gray-700 text-base">
                  {p.description.substring(0, 30)}...
                </p>
                <p className="text-gray-700 text-base">${p.price}</p>
                <button className="ms-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add to cart
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
