import { useState } from "react";
import Layout from "./components/Layout/Layout";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <h1>hello</h1>
      </Layout>
    </>
  );
}

export default App;
