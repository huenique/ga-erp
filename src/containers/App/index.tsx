import "./index.css";

import { Route, Routes } from "react-router-dom";

import Nav from "../../components/Nav";
import Navbar from "../../components/Navbar";
import useScript from "../../hooks/useScript";
import Dashboard from "../Dashboard";
import Orders from "../Orders";
import Products from "../Products";
import Clients from "../Clients";

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
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="container-fluid">
          <div className="row">
            <Routes>
              <Route path="/" element={<Nav />}>
                <Route index element={<Dashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="products" element={<Products />} />
                <Route path="clients" element={<Clients />} />
              </Route>
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
