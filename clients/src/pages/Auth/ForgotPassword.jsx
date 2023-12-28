import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Layout from "../../components/Layout/Layout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/forgot-password",
        { email, newPassword, answer },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went Wrong");
    }
  };
  return (
    <div>
      <Layout title={"Forgot Password"}>
        <div className="pt-10 max-w-lg m-auto">
          <h1 className="text-3xl text-center font-semibold my-7">
            Reset Password
          </h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email"
              className="border p-3 rounded-lg"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter your favorite Sport Name "
              className="border p-3 rounded-lg"
              id="email"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="password"
              className="border p-3 rounded-lg"
              id="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              Reset
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default ForgotPassword;
