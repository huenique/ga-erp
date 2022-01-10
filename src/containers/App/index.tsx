import "./index.css";

import { Route, Routes } from "react-router-dom";

import Nav from "../../components/Nav";
import Navbar from "../../components/Navbar";
import useScript from "../../hooks/useScript";
import Dashboard from "../Dashboard";
import Products from "../Products";

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
      <div className="container-fluid">
        <div className="row">
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
