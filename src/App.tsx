import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Dashboard from "./containers/Dashboard";
import Products from "./containers/Products";
import useScript from "./hooks/useScript";

function App() {
  useScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
    "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
    "anonymous",
    true
  );

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
