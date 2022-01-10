import "./index.css";

import { Link, Outlet } from "react-router-dom";

import useScript from "../../hooks/useScript";

function Nav() {
  useScript("js/feather.min.js", undefined, undefined, false);
  useScript("js/icons.js", undefined, undefined, false);

  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span data-feather="home"></span>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span data-feather="file"></span>
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <span data-feather="shopping-cart"></span>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span data-feather="users"></span>
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span data-feather="bar-chart-2"></span>
                Reports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span data-feather="layers"></span>
                Integrations
              </Link>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <Link
              className="link-secondary"
              to="/"
              aria-label="Add a new report"
            >
              <span data-feather="plus-circle"></span>
            </Link>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span data-feather="file-text"></span>
                Current month
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span data-feather="file-text"></span>
                Last quarter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span data-feather="file-text"></span>
                Social engagement
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span data-feather="file-text"></span>
                Year-end sale
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
