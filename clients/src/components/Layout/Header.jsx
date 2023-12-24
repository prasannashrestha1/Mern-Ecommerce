import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

export default function Header() {
  const [auth, setAuth] = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <header className="bg-slate-200 shadow-md navbar sticky ">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500"> Mern</span>
            <span className="text-slate-700">Ecommerce</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-5">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          {!auth.user ? (
            <>
              <Link to="/register">
                <li className="hidden sm:inline text-slate-700 hover:underline">
                  Register
                </li>
              </Link>
              <Link to="/login">
                <li className="hidden sm:inline text-slate-700 hover:underline">
                  Login
                </li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <li
                  className="hidden sm:inline text-slate-700 hover:underline"
                  onClick={handleLogOut}
                >
                  Logout
                </li>
              </Link>
            </>
          )}
          <Link to="/cart">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Cart(0)
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
