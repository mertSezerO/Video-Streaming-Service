import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div id="auth-layout">
      <nav>
        <ul>
          <li>
            <Link to={"/"} className="link" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          |
          <li>
            <Link
              to={"search"}
              className="link"
              style={{ textDecoration: "none" }}
            >
              Find
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
