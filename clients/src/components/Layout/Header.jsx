// import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/UseCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

export default function Header() {
  const [auth, setAuth] = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const categories = useCategory();
  const [cart] = useCart();

  const navigate = useNavigate();
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

          <div onClick={() => setOpenCategory((prev) => !prev)} className="">
            <li className=" sm:inline text-slate-700 hover:underline flex">
              Category
              {!openCategory ? (
                <AiOutlineCaretDown className="h-3" />
              ) : (
                <AiOutlineCaretUp className="h-3" />
              )}
            </li>
            {openCategory && (
              <div className="absolute top-20 flex flex-col items-start rounded-lg p-4 w-[200px] bg-slate-200 gap-4 border-slate-100 border-4 ">
                <li className="hidden sm:inline text-slate-700 hover:underline">
                  <Link to={`/categories`}>All Categories</Link>
                </li>
                {categories.map((c) => (
                  <li
                    key={c._id}
                    className="hidden sm:inline text-slate-700 hover:underline"
                  >
                    <Link to={`/category/${c.slug}`}>{c.name}</Link>
                  </li>
                ))}
              </div>
            )}
          </div>

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
            <Badge count={cart?.length} showZero>
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Cart
              </li>
            </Badge>
          </Link>
        </ul>
      </div>
    </header>
  );
}
