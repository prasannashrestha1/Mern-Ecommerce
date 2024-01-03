import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import axios from "axios";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useState();
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/auth/orders"
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

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

          {orders?.map((o, i) => {
            return (
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        #
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Buyer
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Order Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Payment
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <td className="px-6 py-4">{i + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {o?.status}
                      </th>
                      <td className="px-6 py-4">{o?.status}</td>
                      <td className="px-6 py-4">{o?.buyer?.name}</td>
                      <td className="px-6 py-4">
                        {moment(o?.createdAt).fromNow()}
                      </td>
                      <td className="px-6 py-4">
                        {o?.payment.success ? "Success" : "Failed"}
                      </td>
                      <td className="px-6 py-4">{o?.product.length}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
