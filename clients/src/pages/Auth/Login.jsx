import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.response.data);
      toast.error("Something went Wrong");
    }
  };
  return (
    <div>
      <Layout>
        <div className="pt-10 max-w-lg m-auto">
          <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
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
              type="password"
              placeholder="password"
              className="border p-3 rounded-lg"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              // disabled={loading}
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {/* {loading ? "Loading..." : "Sign Up"} */} Sign Up
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <p>Don't have an Account?</p>
            <Link to={"/register"}>
              <span className="text-blue-700">Sign Up</span>
            </Link>
          </div>
          {/* {error && <p className="text-red-500 mt-5">{error}</p>} */}
        </div>
      </Layout>
    </div>
  );
};

export default Login;
