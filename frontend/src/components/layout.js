import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <ul>
          <li>
            <Link to={"/"} className="link" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <p>|</p>
          <li>
            <Link
              to={"search"}
              className="link"
              style={{ textDecoration: "none" }}
            >
              Find
            </Link>
          </li>
          <p>|</p>
          <li>
            <Link
              to={"/watchlist"}
              className="link"
              style={{ textDecoration: "none" }}
            >
              Watchlist
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
