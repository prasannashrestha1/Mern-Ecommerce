import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/Search";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search Results"}>
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl">Search Results</h1>
          <h4 className="text-xl">
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values.results.length}`}
          </h4>
          <div className="flex justify-center items-center gap-7">
            {values?.results.map((p) => (
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
                  <button className=" ms-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Details
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
      </div>
    </Layout>
  );
};

export default Search;
