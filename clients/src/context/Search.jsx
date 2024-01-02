import axios from "axios";
import { useContext, useState, createContext } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    keyword: "",
    results: [],
  });

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchContext.Provider>
  );
};

//custom hook

const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
