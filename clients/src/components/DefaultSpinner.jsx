import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const DefaultSpinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });

    return () => {
      clearInterval(interval);
    };
  }, [count, navigate, location, path]);

  return (
    <div className="flex flex-col h-[100vh] items-center justify-center">
      <h1 className="text-center text-4xl pb-2">
        Redirecting you in {count} seconds
      </h1>
      <Spinner className="h-16 w-16 text-gray-900/50 " />
    </div>
  );
};
