// import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import SearchInput from "../Form/SearchInput";

export default function Header() {
  const [auth, setAuth] = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

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

  // const toPascalCase = (str) =>
  //   (str.match(/[a-zA-Z0-9]+/g) || [])
  //     .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
  //     .join("");
  // const userUpperCase = toPascalCase(auth?.user?.name);

  return (
    <header className="bg-slate-200 shadow-md navbar sticky ">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500"> Mern</span>
            <span className="text-slate-700">Ecommerce</span>
          </h1>
        </Link>
        <SearchInput />
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
              <div onClick={() => setIsOpen((prev) => !prev)} className="">
                <li className=" sm:inline text-slate-700 hover:underline flex">
                  {auth?.user?.name}
                  {!isOpen ? (
                    <AiOutlineCaretDown className="h-3" />
                  ) : (
                    <AiOutlineCaretUp className="h-3" />
                  )}
                </li>
                {isOpen && (
                  <div className="absolute top-20 flex flex-col items-start rounded-lg p-4 w-[200px] bg-slate-200 gap-4 border-slate-100 border-4 ">
                    <Link
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "users"
                      }`}
                    >
                      <li className="hidden sm:inline text-slate-700 hover:underline">
                        Dashboard
                      </li>
                    </Link>
                    <Link to="/login">
                      <li
                        className="hidden sm:inline text-slate-700 hover:underline"
                        onClick={handleLogOut}
                      >
                        Logout
                      </li>
                    </Link>
                  </div>
                )}
              </div>
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
